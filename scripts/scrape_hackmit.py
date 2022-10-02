import requests
from bs4 import BeautifulSoup
import csv
import re
import random

import nltk.data
nltk.download('punkt')

tokenizer = nltk.data.load('tokenizers/punkt/english.pickle')

file_names = ["https://hackmit.org/", "https://dayof.hackmit.org/"]
all_text = {}

for URL in file_names:
    i = 0
    page = requests.get(URL)

    bs = BeautifulSoup(page.content, "html.parser")

    curr_p = ""
    for p in bs.find_all("p"):
        p = p.get_text()
        p = " ".join(p.split())

        if len(p) > 7:
            curr_p += p + " "
        if len(p) < 30 or "?" in p or "!" in p:
            continue

        all_s = tokenizer.tokenize(curr_p)
        all_text[f"{URL}_{i}"] = " ".join(all_s)
        i += 1

        curr_p = ""

header = ["title", "text"]

with open('./new_data.csv', 'w') as f:
    writer = csv.writer(f, delimiter='\t')
    writer.writerow(header)
    for k, v in all_text.items():
        writer.writerow([k, v])
