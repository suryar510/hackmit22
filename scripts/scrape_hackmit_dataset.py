import requests
from bs4 import BeautifulSoup
import csv
import re
import random

import nltk.data
nltk.download('punkt')

tokenizer = nltk.data.load('tokenizers/punkt/english.pickle')

file_names = ["https://hackmit.org/", "https://dayof.hackmit.org/"]

tr_source = open('./data/train.source', 'w')
tr_target = open('./data/train.target', 'w')
val_source = open('./data/val.source', 'w')
val_target = open('./data/val.target', 'w')

source_text = []
target_text = []

for URL in file_names:
    page = requests.get(URL)

    bs = BeautifulSoup(page.content, "html.parser")

    curr_p = ""
    for p in bs.find_all("p"):
        p = p.get_text()
        p = " ".join(p.split())

        if len(p) > 7:
            curr_p += p + " "
        if len(p) < 15 or "?" in p or "!" in p:
            continue

        all_s = tokenizer.tokenize(curr_p)
        for i in range(2, len(all_s) - 1, 2):
            source_text += [" ".join(all_s[:i])]
            target_text += [" ".join(all_s[i])]

        curr_p = ""

inds = list(range(len(source_text)))
random.shuffle(inds)

for i in inds[:int(len(inds) * 4 // 5)]:
    tr_source.write(f"{source_text[i]} \n")
    tr_target.write(f"{target_text[i]} \n")

for i in inds[int(len(inds) * 4 // 5):]:
    val_source.write(f"{source_text[i]} \n")
    val_target.write(f"{target_text[i]} \n")

val_source.close()
val_target.close()
tr_source.close()
tr_target.close()
