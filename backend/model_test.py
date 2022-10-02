from transformers import RagRetriever, RagTokenizer, RagTokenForGeneration
from torchsummary import summary
import time


dataset_path = './retrieval_data/my_knowledge_dataset'
index_path = './retrieval_data/my_knowledge_dataset_hnsw_index.faiss'

retriever = RagRetriever.from_pretrained("facebook/rag-token-nq", index_name="custom", passages_path=dataset_path, index_path=index_path)
tokenizer = RagTokenizer.from_pretrained("facebook/rag-token-nq")
model = RagTokenForGeneration.from_pretrained("facebook/rag-token-nq", retriever=retriever)

input_ids = tokenizer("hello world", return_tensors="pt").input_ids

while True:
    inp = input("what would you like to know? ")
    s = time.time()
    input_ids = tokenizer(inp, return_tensors="pt").input_ids
    output_ids = model.generate(input_ids)
    out = tokenizer.batch_decode(output_ids, skip_special_tokens=True)[0]
    e = time.time()

    print(f"answer: {out} (elapsed {round(e-s, 4)})")
