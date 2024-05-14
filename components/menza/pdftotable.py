'''
A PROGRAM MŰKÖDÉSE

1. Adott hónap menüjének lekérése PDF-ben
https://www.ejg.hu/kat/etkezessel-kapcsolatos-informaciok/


2. A kapott PDF átalakítása táblázattá (xlsx)
https://smallpdf.com/pdf-to-excel#r=convert-to-excel


3. A kapott xlsx fájl átalakítása JSON formátumba
https://excel2json.io/editor

A kapott fájl valahogy így néz ki:
[
{ "1": null,     "2": null,                 "KinderF.ésK.Kft.": "Hartyán konyha",   "": null   },
{ "1": null,     "2": "2024.04.29.-05.03.", "KinderF.ésK.Kft.": null,           "": "Gimnázium"},
{ "1": "B menü", "2": null,                 "KinderF.ésK.Kft.": "18.hét",        "": "A menü"  },

{ "1": "Hamis gulyásleves", "2": null,  "KinderF.ésK.Kft.": "Hétfő",  "": "Hamis gulyásleves" },
{ "1": "Tonhalrúd rántva",  "2": null,  "KinderF.ésK.Kft.": null,     "": "Zöldborsófőzelék"  },
{ "1": "Párolt rizs",       "2": null,  "KinderF.ésK.Kft.": null,     "": "Főtt tojás 2db"    },
{ "1": "Tartár mártás",     "2": null,  "KinderF.ésK.Kft.": null,     "": "Tk.kenyér"         },
{ "1": "Tárkonyos raguleves","2": null, "KinderF.ésK.Kft.": "Kedd",   "": "Tárkonyos raguleves"}
]

Általánosan:
Egy listát kapunk, az első három sor a fejléc
A dátum az alábbi helyen található: file[1]["2"]
Utána szótárak következnek. Minden szótár 3-as vagy 4-es csoportba lehet rakni. (Attól függően, aznap mennyi fogást osztanak ki, de lehet 1-is (pl.: Ünnepnap))

Az indexelés:
INDEX ["1"] : B menü
INDEX [""]  : A menü
INDEX ["KinderF.ésK.Kft."] : a hét száma vagy a hét napja


CÉL az alábbi formátum elérése:
{ dátum : {"A" : [fogások], "B" : [fogások], "nap" : a hét napja},
  dátum : {"A" : [fogások], "B" : [fogások], "nap" : a hét napja} }
'''

import json
from datetime import timedelta, datetime
import os

def main (path : str):
    with open(path, 'r', encoding='utf-8') as outfile:
        nyers_menu = json.loads(outfile.read())

    havi_menu = {}

    # példa: "2024.04.29.-05.03."
    datum = nyers_menu[1]["2"]
    # tördelés: "2024.04.29."
    datum = datum.split('-')[0]

    def kovetkezo_datum(datum : str, lepes=1) -> str:
        ev = int( datum.split('.')[0] )
        ho = int( datum.split('.')[1] )
        nap = int( datum.split('.')[2] )
        next_day_date = datetime(ev, ho, nap) + timedelta(days=lepes)

        format_string = '%Y.%m.%d'
    
        # Convert the datetime object to a string in the specified format 
        next_day_date = next_day_date.strftime(format_string) 

        return next_day_date

    def het_napja(datum : str) -> str:
        ev = int( datum.split('.')[0] )
        ho = int( datum.split('.')[1] )
        nap = int( datum.split('.')[2] )
        datum = datetime(ev, ho, nap)
        nap = datum.strftime('%A')
        return nap
        
    datum = kovetkezo_datum(datum, lepes=-1)
    for sor in nyers_menu:
        if sor[""] == 'Gimnázium': 
            datum = sor['2']
            datum = datum.split('-')[0]
            datum = kovetkezo_datum(datum, lepes=-1)
        if sor['1'] == None or sor['1'] == 'B menü': continue

        if sor["KinderF.ésK.Kft."] != None:
            datum = kovetkezo_datum(datum)
            havi_menu.update({datum : {'A' : [], 'B' : [], 'nap' : het_napja(datum)}})
        havi_menu[datum]['A'].append(sor[""])
        havi_menu[datum]['B'].append(sor["1"])
        


    with open('components\\menza\\mindenkorimenu.json', 'r', encoding='utf-8') as outfile:
        mindenkori_menu = json.loads(outfile.read())

    mindenkori_menu.update(havi_menu)

    with open('components\\menza\\mindenkorimenu.json', 'w', encoding='utf-8') as outfile:
        json.dump(mindenkori_menu, outfile)
    
    with open('public\\storage\\mindenkorimenu.json', 'w', encoding='utf-8') as outfile:
        json.dump(mindenkori_menu, outfile)



current_dir = os.path.dirname(os.path.realpath(__file__))
tablak_path = os.path.join(current_dir, "tablak")
files_in_dir = os.listdir(tablak_path)

print(files_in_dir)
for file in files_in_dir:
    main(os.path.join(tablak_path, file))
