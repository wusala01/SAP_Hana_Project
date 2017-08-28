const groups = {
	"core": {
		"author": {
			"type": "name",
			"multi": true,
			"title": "Autor"
			},
		"editor": {
			"title": "Editor",
			"type": "name",
			"multi": true
			},
		"date": {
			"type": "date",
			"timespan": true,
			"title": "Datum"
			},
		"title": {
			"type": "text",
			"title": "Titel",
			"multi": true
			},
		"subtitle": {
			"title": "Untertitel",
			"type": "text"
			},
		"titleaddon": {
			"title": "Titelanhang",
			"type": "text"
			},
		"type": {
			"type": "option",
			"options": [
				{"key": "manual", "name": "Anleitung"}, 
				{"key": "patent", "name": "Patent"}, 
				{"key": "report", "name": "Report"}, 
				{"key": "thesis", "name": "Bachelorarbeit"}, 
				{"key": "mathesis", "name": "Masterarbeit"}, 
				{"key": "phdthesis", "name": "Doktorarbeit"}, 
				{"key": "candthesis", "name": "Cand.-Arbeit"}, 
				{"key": "techreport", "name": "technischer Report"}, 
				{"key": "resreport", "name": "Untersuchungsreport"}, 
				{"key": "software", "name": "Software"}, 
				{"key": "datacd", "name": "Daten-CD"}, 
				{"key": "audiocd", "name": "Audio-CD"} 
				],
			"title": "Typ"
			},
		"indextitle": {
			"title": "Sortierungstitel",
			"type": "text"
			},
		},
	"person": {
		"$name": "Mitarbeiter",
		"afterword": {
			"title": "Nachwortautor",
			"type": "name",
			"multi": true
			},
		"annotator": {
			"title": "Anmerkungsautor",
			"type": "name",
			"multi": true
			},
		"commentator": {
			"title": "Kommentator",
			"type": "name",
			"multi": true
			},
		"editora": {
			"title": "Zweiteditor",
			"type": "name",
			"multi": true
			},
		"editorb": {
			"title": "Dritteditor",
			"type": "name",
			"multi": true
			},
		"editorc": {
			"title": "Vierteditor",
			"type": "name",
			"multi": true
			},
		"foreword": {
			"title": "Vorwortautor",
			"type": "name",
			"multi": true
			},
		"holder": {
			"title": "Patentinhaber",
			"type": "name",
			"multi": true
			},
		"translator": {
			"title": "Übersetzer",
			"type": "name",
			"multi": true
			}
		},
	"superordinate": {
		"$name": "veröffentlicht in",
		"bookauthor": {
			"title": "Autor",
			"type": "name",
			"multi": true
			},
		"booksubtitle": {
			"title": "Untertitel",
			"type": "text"
			},
		"booktitle": {
			"title": "Titel",
			"type": "text"
			},
		"booktitleaddon": {
			"title": "Titelanhang",
			"type": "text"
			},
		"bookpagination": {
			"title": "Nummerierung",
			"type": "option",
			"options": [
				{ "key": "page", "name": "Seiten"}, 
				{"key": "column", "name": "Spalten"}, {"key": "line", "name": "Zeilen"}, 
				{"key": "verse", "name": "Verse"}, {"key": "section", "name": "Abschnitte"}, 
				{"key": "paragraph", "name": "Paragrafen"}
				]
			},
		"eventdate": {
			"title": "Veranstaltungsdatum",
			"type": "date",
			"timespan": true
			},
		"eventtitle": {
			"title": "Veranstaltungsname",
			"type": "text"
			},
		"journalsubtitle": {
			"title": "Untertitel",
			"type": "text"
			},
		"journaltitle": {
			"title": "Titel",
			"type": "text"
			},
		"mainsubtitle": {
			"title": "Untertitel",
			"type": "text"
			},
		"maintitle": {
			"title": "Titel",
			"type": "text"
			},
		"maintitleaddon": {
			"title": "Titelanhang",
			"type": "text"
			},
		"venue": {
			"title": "Veranstaltungsort",
			"type": "text"
			}
		},
	"periodical": {
		"$name": "Reihentitel",
		"edition": {
			"title": "Edition",
			"type": "integer"
			},
		"issue": {
			"title": "Ausgabe",
			"type": "text"
			},
		"issuesubtitle": {
			"title": "Untertitel",
			"type": "text"
			},
		"issuetitle": {
			"title": "titel",
			"type": "text"
			},
		"number": {
			"title": "Nummer",
			"type": "text"
			},
		"series": {
			"title": "Reihe",
			"type": "text"
			},
		"volume": {
			"title": "Ausgabe",
			"type": "text"
			},
		"volumes": {
			"title": "Ausgaben insg.",
			"type": "text"
			},
		},
	"publication": {
		"$name": "Publikation",
		"organization": {
			"title": "Organisation",
			"type": "text"
			},
		"location": {
			"title": "Ort",
			"type": "text"
			},
		"language": {
			"title": "Sprache",
			"type": "text"
			},
		"langid": {
			"title": "SprachID",
			"type": "option",
			"options": [
				{"key": "catalan","name": "Catalan"}, 
				{"key": "croatian","name": "Croatian"}, 
				{"key": "czech","name": "Czech"}, 
				{"key": "danish","name": "Danish"}, 
				{"key": "dutch","name": "Dutch"}, 
				{"key": "american","name": "English - USA"}, 
				{"key": "english","name": "English"}, 
				{"key": "british","name": "English - UK"}, 
				{"key": "canadian","name": "English - Canada"}, 
				{"key": "australian","name": "English - Australia"}, 
				{"key": "newzealand","name": "English - New Zealand"}, 
				{"key": "estonian","name": "Estonian"}, 
				{"key": "finnish","name": "Finnish"}, 
				{"key": "french","name": "French"}, 
				{"key": "german","name": "German"}, 
				{"key": "german","name": "German - Germany"}, 
				{"key": "swissgerman","name": "German - Switzerland"}, 
				{"key": "austrian","name": "German - Austria"}, 
				{"key": "ngerman","name": "German - Germany (new)"}, 
				{"key": "nswissgerman","name": "German - Switzerland"}, 
				{"key": "greek","name": "Greek"}, 
				{"key": "italian","name": "Italian"}, 
				{"key": "norwegian","name": "Norwegian"}, 
				{"key": "polish","name": "Polish"}, 
				{"key": "brazil","name": "Portuguese - Brazil"}, 
				{"key": "portuges","name": "Portuguese - Portugal"}, 
				{"key": "russian","name": "Russian"}, 
				{"key": "slovak","name": "Slovak"}, 
				{"key": "slovene","name": "Slovene"}, 
				{"key": "spanish","name": "Spanish"}, 
				{"key": "swedish","name": "Swedish"}
				]
			},
		"url": {
			"title": "URL",
			"type": "uri",
			"direct": true
			},
		"urldate": {
			"title": "Abrufdatum",
			"type": "date",
			"timespan": false
			},
		"publisher": {
			"title": "Verlag",
			"type": "text",
			"multi": true
			},
		"pubstate": {
			"title": "Publikationsstatus",
			"type": "option",
			"options": [ 
				{"key": "inpreparation", "name": "invorbereitung"}, 
				{"key": "submitted", "name": "eingereicht"}, 
				{"key": "forthcoming", "name": "bevorstehend"}, 
				{"key": "inpress","name": "im Druck"}, 
				{"key": "prepublished", "name": "vorveröffentlicht"}
				]
			},
		"institution": {
			"title": "Institution",
			"type": "text"
			}
		},
	"identifier": {
		"$name": "Kennung",
		"isan": {
			"title": "ISAN",
			"type": "text"
			},
		"isbn": {
			"title": "ISBN",
			"type": "text",
			"multi": true
			},
		"ismn": {
			"title": "ISMN",
			"type": "text"
			},
		"isrn": {
			"title": "ISRN",
			"type": "text"
			},
		"issn": {
			"title": "ISSN",
			"type": "text"
			},
		"eid": {
			"title": "E-ID",
			"type": "text"
			},
		"eprint": {
			"title": "Eprint",
			"type": "text"
			},
		"wprintclass": {
			"title": "Eprint Klasse",
			"type": "text"
			},
		"eprinttype": {
			"title": "Eprint Typ",
			"type": "text"
			},
		"DOI": {
			"title": "DOI",
			"type": "text",
			"direct": true
			}
		},
	"other": {
		"$name": "Anderes",
		"addendum": {
			"title": "Anmerkung",
			"type": "text"
			},
		"howpublished": {
			"title": "Publikationsmethode",
			"type": "text"
			},
		"pages": {
			"title": "Seiten",
			"type": "range"
			},
		"pagetotal": {
			"title": "Seiten insg.",
			"type": "text"
			},
		"pagination": {
			"title": "Nummerierung",
			"type": "option",
			"options": [
				{ "key": "page", "name": "Seiten"}, 
				{"key": "column", "name": "Spalten"}, {"key": "line", "name": "Zeilen"}, 
				{"key": "verse", "name": "Verse"}, {"key": "section", "name": "Abschnitte"}, 
				{"key": "paragraph", "name": "Paragrafen"}
				]
			},
		"keywords": {
			"title": "Schlagwörter",
			"type": "text",
			"direct": true
			},
		"label": {
			"title": "Kurzzitation",
			"type": "text"
			},
		"part": {
			"title": "Nummer",
			"type": "text"
			}
		},
	"notes": {
		"$name": "Textinformationen",
		"abstract": {
			"order": 1,
			"type": "longtext",
			"title": "Zusammenfassung"
			},
		"annotation": {
			"order": 2,
			"title": "Anmerkungen",
			"type": "longtext"
			},
		"note": {
			"order": 3,
			"title": "Notiz",
			"type": "longtext"
			}
		}
	},
	fields = {
		    "article": {
			"required": ["journaltitle", "title", "author", "date"],
			"eitheror": [],
			"optional": ["abstract", "addendum", "annotator", "commentator", "doi", "editor", "editora", "editorb", "editorc", "eid", "eprint", "eprintclass", "eprinttype", "issn", "issue", "issuesubtitle", "issuetitle", "journalsubtitle", "language", "langid", "note", "number", "origlanguage", "pages", "pagination", "pubstate", "series", "subtitle", "titleaddon", "translator", "url", "urldate", "version", "volume", "annotation", "keywords"]
		},
		"online": {
			"required": ["date", "title", "url"],
			"eitheror": ["editor", "author"],
			"optional": ["abstract", "addendum", "pubstate", "subtitle", "language", "langid", "urldate", "titleaddon", "version", "note", "organization", "annotation", "keywords"]
		},
		"book": {
			"required": ["title", "author", "date"],
			"eitheror": [],
			"optional": ["abstract", "addendum", "afterword", "annotator", "chapter", "commentator", "doi", "edition", "editor", "editora", "editorb", "editorc", "eprint", "eprintclass", "eprinttype", "foreword", "introduction", "isbn", "language", "langid", "location", "mainsubtitle", "maintitle", "maintitleaddon", "note", "number", "origlanguage", "pages", "pagination", "pagetotal", "bookpagination", "part", "publisher", "pubstate", "series", "subtitle", "titleaddon", "translator", "url", "urldate", "volume", "volumes", "annotation", "keywords"]
		},
		"mvbook": {
			"required": ["title", "author", "date"],
			"eitheror": [],
			"optional": ["abstract", "addendum", "afterword", "annotator", "commentator", "doi", "edition", "editor", "editora", "editorb", "editorc", "eprint", "eprintclass", "eprinttype", "foreword", "introduction", "isbn", "language", "langid", "location", "note", "number", "origlanguage", "pagetotal", "bookpagination", "publisher", "pubstate", "series", "subtitle", "titleaddon", "translator", "url", "urldate", "volumes", "annotation", "keywords"]
		},
		"inbook": {
			"required": ["title", "booktitle", "author", "date"],
			"eitheror": [],
			"optional": ["abstract", "addendum", "afterword", "annotator", "bookauthor", "booksubtitle", "booktitleaddon", "chapter", "commentator", "doi", "edition", "editor", "editora", "editorb", "editorc", "eprint", "eprintclass", "eprinttype", "foreword", "introduction", "isbn", "language", "langid", "location", "mainsubtitle", "maintitle", "maintitleaddon", "note", "number", "origlanguage", "pages", "pagination", "part", "publisher", "pubstate", "series", "subtitle", "titleaddon", "translator", "url", "urldate", "volume", "volumes", "annotation", "keywords"]
		},
		"bookinbook": {
			"required": ["title", "booktitle", "author", "date"],
			"eitheror": [],
			"optional": ["abstract", "addendum", "afterword", "annotator", "bookauthor", "booksubtitle", "booktitleaddon", "chapter", "commentator", "doi", "edition", "editor", "editora", "editorb", "editorc", "eprint", "eprintclass", "eprinttype", "foreword", "introduction", "isbn", "language", "langid", "location", "mainsubtitle", "maintitle", "maintitleaddon", "note", "number", "origlanguage", "pages", "pagination", "part", "publisher", "pubstate", "series", "subtitle", "titleaddon", "translator", "url", "urldate", "volume", "volumes", "annotation", "keywords"]
		},
		"suppbook": {
			"required": ["title", "booktitle", "author", "date"],
			"eitheror": [],
			"optional": ["abstract", "addendum", "afterword", "annotator", "bookauthor", "booksubtitle", "booktitleaddon", "chapter", "commentator", "doi", "edition", "editor", "editora", "editorb", "editorc", "eprint", "eprintclass", "eprinttype", "foreword", "introduction", "isbn", "language", "langid", "location", "mainsubtitle", "maintitle", "maintitleaddon", "note", "number", "origlanguage", "pages", "pagination", "part", "publisher", "pubstate", "series", "subtitle", "titleaddon", "translator", "url", "urldate", "volume", "volumes", "annotation", "keywords"]
		},
		"booklet": {
			"required": ["title", "date"],
			"eitheror": ["editor", "author"],
			"optional": ["abstract", "titleaddon", "addendum", "pages", "pagination", "howpublished", "type", "pubstate", "chapter", "doi", "subtitle", "language", "langid", "location", "url", "urldate", "pagetotal", "bookpagination", "note", "eprint", "eprintclass", "eprinttype", "annotation", "keywords"]
		},
		"collection": {
			"required": ["editor", "title", "date"],
			"eitheror": [],
			"optional": ["abstract", "addendum", "afterword", "annotator", "chapter", "commentator", "doi", "edition", "editora", "editorb", "editorc", "eprint", "eprintclass", "eprinttype", "foreword", "introduction", "isbn", "language", "langid", "location", "mainsubtitle", "maintitle", "maintitleaddon", "note", "number", "origlanguage", "pages", "pagination", "pagetotal", "bookpagination", "part", "publisher", "pubstate", "series", "subtitle", "titleaddon", "translator", "url", "urldate", "volume", "volumes", "annotation", "keywords"]
		},
		"mvcollection": {
			"required": ["editor", "title", "date"],
			"eitheror": [],
			"optional": ["abstract", "addendum", "afterword", "annotator", "commentator", "doi", "edition", "editora", "editorb", "editorc", "eprint", "eprintclass", "eprinttype", "foreword", "introduction", "isbn", "language", "langid", "location", "note", "number", "origlanguage", "pagetotal", "bookpagination", "publisher", "pubstate", "series", "subtitle", "titleaddon", "translator", "url", "urldate", "volumes", "annotation", "keywords"]
		},
		"incollection": {
			"required": ["title", "editor", "booktitle", "author", "date"],
			"eitheror": [],
			"optional": ["abstract", "addendum", "afterword", "annotator", "booksubtitle", "booktitleaddon", "chapter", "commentator", "doi", "edition", "editora", "editorb", "editorc", "eprint", "eprintclass", "eprinttype", "foreword", "introduction", "isbn", "language", "langid", "location", "mainsubtitle", "maintitle", "maintitleaddon", "note", "number", "origlanguage", "pages", "pagination", "part", "publisher", "pubstate", "series", "subtitle", "titleaddon", "translator", "url", "urldate", "volume", "volumes", "annotation", "keywords"]
		},
		"suppcollection": {
			"required": ["title", "editor", "booktitle", "author", "date"],
			"eitheror": [],
			"optional": ["abstract", "addendum", "afterword", "annotator", "booksubtitle", "booktitleaddon", "chapter", "commentator", "doi", "edition", "editora", "editorb", "editorc", "eprint", "eprintclass", "eprinttype", "foreword", "introduction", "isbn", "language", "langid", "location", "mainsubtitle", "maintitle", "maintitleaddon", "note", "number", "origlanguage", "pages", "pagination", "part", "publisher", "pubstate", "series", "subtitle", "titleaddon", "translator", "url", "urldate", "volume", "volumes", "annotation", "keywords"]
		},
		"manual": {
			"required": ["title", "date"],
			"eitheror": ["editor", "author"],
			"optional": ["abstract", "addendum", "chapter", "doi", "edition", "eprint", "eprintclass", "eprinttype", "isbn", "language", "langid", "location", "note", "number", "organization", "pages", "pagination", "pagetotal", "bookpagination", "publisher", "pubstate", "series", "subtitle", "titleaddon", "type", "url", "urldate", "version", "annotation", "keywords"]
		},
		"misc": {
			"required": ["title", "date"],
			"eitheror": ["editor", "author"],
			"optional": ["abstract", "addendum", "howpublished", "type", "pubstate", "organization", "doi", "subtitle", "language", "langid", "location", "url", "urldate", "titleaddon", "version", "note", "eprint", "eprintclass", "eprinttype", "annotation", "keywords"]
		},
		"patent": {
			"required": ["title", "number", "author", "date"],
			"eitheror": [],
			"optional": ["abstract", "addendum", "holder", "location", "pubstate", "doi", "subtitle", "titleaddon", "type", "url", "urldate", "version", "note", "eprint", "eprintclass", "eprinttype", "annotation", "keywords"]
		},
		"periodical": {
			"required": ["editor", "title", "date"],
			"eitheror": [],
			"optional": ["abstract", "addendum", "volume", "pubstate", "number", "series", "issn", "issue", "issuesubtitle", "issuetitle", "doi", "subtitle", "editora", "editorb", "editorc", "url", "urldate", "language", "langid", "note", "eprint", "eprintclass", "eprinttype", "annotation", "keywords"]
		},
		"suppperiodical": {
			"required": ["journaltitle", "title", "author", "date"],
			"eitheror": [],
			"optional": ["abstract", "addendum", "annotator", "commentator", "doi", "editor", "editora", "editorb", "editorc", "eid", "eprint", "eprintclass", "eprinttype", "issn", "issue", "issuesubtitle", "issuetitle", "journalsubtitle", "language", "langid", "note", "number", "origlanguage", "pages", "pagination", "pubstate", "series", "subtitle", "titleaddon", "translator", "url", "urldate", "version", "volume", "annotation", "keywords"]
		},
		"proceedings": {
			"required": ["editor", "title", "date"],
			"eitheror": [],
			"optional": ["abstract", "addendum", "chapter", "doi", "eprint", "eprintclass", "eprinttype", "eventdate", "eventtitle", "isbn", "language", "langid", "location", "mainsubtitle", "maintitle", "maintitleaddon", "note", "number", "organization", "pages", "pagination", "pagetotal", "bookpagination", "part", "publisher", "pubstate", "series", "subtitle", "titleaddon", "url", "urldate", "venue", "volume", "volumes", "annotation", "keywords"]
		},
		"mvproceedings": {
			"required": ["editor", "title", "date"],
			"eitheror": [],
			"optional": ["abstract", "addendum", "doi", "eprint", "eprintclass", "eprinttype", "eventdate", "eventtitle", "isbn", "language", "langid", "location", "note", "number", "organization", "pagetotal", "bookpagination", "publisher", "pubstate", "series", "subtitle", "titleaddon", "url", "urldate", "venue", "volumes", "annotation", "keywords"]
		},
		"inproceedings": {
			"required": ["title", "editor", "booktitle", "author", "date"],
			"eitheror": [],
			"optional": ["abstract", "addendum", "booksubtitle", "booktitleaddon", "chapter", "doi", "eprint", "eprintclass", "eprinttype", "eventdate", "eventtitle", "isbn", "language", "langid", "location", "mainsubtitle", "maintitle", "maintitleaddon", "note", "number", "organization", "pages", "pagination", "part", "publisher", "pubstate", "series", "subtitle", "titleaddon", "url", "urldate", "venue", "volume", "volumes", "annotation", "keywords"]
		},
		"reference": {
			"required": ["editor", "title", "date"],
			"eitheror": [],
			"optional": ["abstract", "addendum", "afterword", "annotator", "chapter", "commentator", "doi", "edition", "editora", "editorb", "editorc", "eprint", "eprintclass", "eprinttype", "foreword", "introduction", "isbn", "language", "langid", "location", "mainsubtitle", "maintitle", "maintitleaddon", "note", "number", "origlanguage", "pages", "pagination", "pagetotal", "bookpagination", "part", "publisher", "pubstate", "series", "subtitle", "titleaddon", "translator", "url", "urldate", "volume", "volumes", "annotation", "keywords"]
		},
		"mvreference": {
			"required": ["editor", "title", "date"],
			"eitheror": [],
			"optional": ["abstract", "addendum", "afterword", "annotator", "commentator", "doi", "edition", "editora", "editorb", "editorc", "eprint", "eprintclass", "eprinttype", "foreword", "introduction", "isbn", "language", "langid", "location", "note", "number", "origlanguage", "pagetotal", "bookpagination", "publisher", "pubstate", "series", "subtitle", "titleaddon", "translator", "url", "urldate", "volumes", "annotation", "keywords"]
		},
		"inreference": {
			"required": ["title", "editor", "booktitle", "author", "date"],
			"eitheror": [],
			"optional": ["abstract", "addendum", "afterword", "annotator", "booksubtitle", "booktitleaddon", "chapter", "commentator", "doi", "edition", "editora", "editorb", "editorc", "eprint", "eprintclass", "eprinttype", "foreword", "introduction", "isbn", "language", "langid", "location", "mainsubtitle", "maintitle", "maintitleaddon", "note", "number", "origlanguage", "pages", "pagination", "part", "publisher", "pubstate", "series", "subtitle", "titleaddon", "translator", "url", "urldate", "volume", "volumes", "annotation", "keywords"]
		},
		"report": {
			"required": ["author", "title", "type", "institution", "date"],
			"eitheror": [],
			"optional": ["abstract", "addendum", "pages", "pagination", "pagetotal", "bookpagination", "pubstate", "number", "isrn", "chapter", "doi", "subtitle", "language", "langid", "location", "url", "urldate", "titleaddon", "version", "note", "eprint", "eprintclass", "eprinttype", "annotation", "keywords"]
		},
		"thesis": {
			"required": ["author", "title", "type", "institution", "date"],
			"eitheror": [],
			"optional": ["abstract", "addendum", "pages", "pagination", "pagetotal", "bookpagination", "pubstate", "isbn", "chapter", "doi", "subtitle", "language", "langid", "location", "url", "urldate", "titleaddon", "note", "eprint", "eprintclass", "eprinttype", "annotation", "keywords"]
		},
		"unpublished": {
			"required": ["title", "author", "date"],
			"eitheror": [],
			"optional": ["abstract", "addendum", "howpublished", "pubstate", "isbn", "date", "subtitle", "language", "langid", "location", "url", "urldate", "titleaddon", "note", "annotation", "keywords"]
		}
	}

