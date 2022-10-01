from transformers import RagRetriever, RagTokenizer, RagTokenForGeneration
from torchsummary import summary
import time

retriever = RagRetriever.from_pretrained("facebook/rag-token-nq", index_name="exact", use_dummy_dataset=True)
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