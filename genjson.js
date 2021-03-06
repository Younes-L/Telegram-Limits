var s = document.createElement("script");
s.type = "application/ld+json";

var d = window.data;

var resp = d.map((e) =>

    e.items.map((l) => (
        {
            "@type": "Question",
            "name": e.name + ": " + l.name + (l.hint.length > 0 ? " " + l.hint : ""),
            "acceptedAnswer": {
                "@type": "Answer",
                "text": l.text.charAt(0).toUpperCase() + l.text.slice(1),
            },
        }
    ))

);

resp.unshift({
    "@type": "Question",
    "name": document.querySelector("header article h2").innerText,
    "acceptedAnswer": {
        "@type": "Answer",
        "text": document.querySelector("header article .content").innerHTML,
    },
})

var json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": document.querySelector("header h1").innerText,
    "mainEntity": [].concat.apply([], resp),
};

s.innerHTML = JSON.stringify(json);
document.body.appendChild(s);