import requests
from bs4 import BeautifulSoup
import csv

file_names = ["https://hackmit.org/", "https://dayof.hackmit.org/"]

all_text = {}
for URL in file_names:
    page = requests.get(URL)

    bs = BeautifulSoup(page.content, "html.parser")

    x = bs.get_text()

    text = x.splitlines()
    text = [" ".join(x.split()) for x in text]
    text = [" ".join(x.split(",")) for x in text]
    text = list(filter(lambda x: len(x) > 10, text))

    all_text[URL] = " ".join(text)

header = ["title", "text"]

with open('./new_data.csv', 'w') as f:
    writer = csv.writer(f, delimiter='\t')
    writer.writerow(header)
    for name in file_names:
        writer.writerow([name, all_text[name]])