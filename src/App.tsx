import { useGetPostsQuery } from './api/baseApi';
import Header from './components/Header';
import PostList from './components/PostList';

export function App() {
  const { data: posts, isLoading, isError } = useGetPostsQuery();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Форум</h1>

        {/* 1. Состояние загрузки */}
        {isLoading && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">Завантаження постів...</p>
          </div>
        )}

        {/* 2. Состояние ошибки */}
        {isError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <p>Помилка завантаження постів з сервера. Перевірте, чи запущений бекенд!</p>
          </div>
        )}

        {/* 3. Список постов / Порожній список */}
        {!isLoading && !isError && posts && (
          posts.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p>Постів поки немає. Додайте перший пост у базу даних!</p>
            </div>
          ) : (
            <PostList posts={posts} />
          )
        )}
      </main>
    </div>
  );
}

export default App;