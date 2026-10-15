from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
 
documents = [
    "поиск научных статей",
    "научные статьи и публикации",
    "машинное обучение и данные"
]
 
query = "поиск научных публикаций"
 
vectorizer = TfidfVectorizer()
tfidf_matrix = vectorizer.fit_transform(documents)
 
print("Словарь:")
print(vectorizer.get_feature_names_out())
 
print("\nTF-IDF-матрица:")
print(tfidf_matrix.toarray())
 
query_vector = vectorizer.transform([query])
print("\nВектор запроса:")
print(query_vector.toarray())
 
similarities = cosine_similarity(query_vector, tfidf_matrix)
 
print("\nСходство с запросом:")
for i, score in enumerate(similarities[0]):
    print(f"D{i+1}: {score:.3f}")
 
best_index = similarities[0].argmax()
print("\nНаиболее релевантный документ:")
print(documents[best_index])
