from transformers import RagRetriever, RagTokenizer, RagTokenForGeneration
from torchsummary import summary
import time
import os
import csv

dataset_path = './data/my_knowledge_dataset'
index_path = './data/my_knowledge_dataset_hnsw_index.faiss'
    
retriever = RagRetriever.from_pretrained("facebook/rag-token-nq", index_name="custom", passages_path=dataset_path, index_path=index_path)
tokenizer = RagTokenizer.from_pretrained("facebook/rag-token-nq")
model = RagTokenForGeneration.from_pretrained("facebook/rag-token-nq", retriever=retriever)

input_ids = tokenizer("hello world", return_tensors="pt").input_ids


def train(text):
    try:
        # convert text to csv
        header = ["title", "text"]
        with open('./new_data.csv', 'w') as f:
            writer = csv.writer(f, delimiter='\t')
            writer.writerow(header)
            writer.writerow([0, text])
        # convert csv into my_knowledge_dataset
        os.system('python use_my_knowledge_dataset.py --csv_path ./new_data.csv --output_dir ./data')
    
        retriever = RagRetriever.from_pretrained("facebook/rag-token-nq", index_name="custom", passages_path=dataset_path, index_path=index_path)
        model = RagTokenForGeneration.from_pretrained("facebook/rag-token-nq", retriever=retriever)

        return True
    except:
        return False

def predict(query):
    print('predicting')

    s = time.time()
    input_ids = tokenizer(query, return_tensors="pt").input_ids
    output_ids = model.generate(input_ids)
    out = tokenizer.batch_decode(output_ids, skip_special_tokens=True)[0]
    e = time.time()

    output = {
       "output": out,
       "time": round(e-s, 4)
    }

    return output