const wordList = [
    "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon",
    "mango", "nectarine", "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine", "ugli", "vanilla",
    "watermelon", "xigua", "yam", "zucchini", "asparagus", "broccoli", "carrot", "daikon", "endive", "fennel",
    "garlic", "horseradish", "iceberg", "jalapeno", "kale", "lettuce", "mushroom", "nutmeg", "okra", "parsnip",
    "quinoa", "radish", "spinach", "tomato", "utopia", "vermicelli", "wasabi", "xanthan", "yucca", "ziti",
    "acorn", "biscuit", "cucumber", "dumpling", "escargot", "falafel", "gnocchi", "hummus", "ink", "jambalaya",
    "ketchup", "lasagna", "macaroon", "nougat", "oregano", "paella", "quiche", "ravioli", "sushi", "taco",
    "udon", "veal", "waffle", "xanthan", "yogurt", "zephyr", "amber", "bronze", "copper", "diamond", "emerald",
    "feldspar", "gold", "hematite", "ivory", "jade", "kryptonite", "lapis", "marble", "nephrite", "onyx",
    "pearl", "quartz", "ruby", "sapphire", "topaz", "uranium", "vanadium", "wolfram", "xenotime", "yttrium", "zinc"
];

let randomWord = (arr) => {
    let random = arr[Math.floor(Math.random() * arr.length)]
    return random;
}

module.exports = randomWord(wordList);
