import { useState } from 'react';
import { useApi } from '../hooks/useApi';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const ApiDemo = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const { data: posts, loading, error } = useApi(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
  );

  const filteredPosts = posts
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <Card className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        API Demo (JSONPlaceholder Posts)
      </h1>

      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search posts..."
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        />
      </div>

      {loading && (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          Loading...
        </div>
      )}

      {error && (
        <div className="text-center py-8 text-red-500 dark:text-red-400">
          Error: {error}
        </div>
      )}

      {!loading && !error && (
        <>
          <div className="space-y-4 mb-6">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-4 text-gray-500 dark:text-gray-400">
                No posts found
              </div>
            ) : (
              filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="p-4 bg-white dark:bg-gray-800 rounded-md shadow-sm"
                >
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {post.body}
                  </p>
                </div>
              ))
            )}
          </div>

          <div className="flex justify-between">
            <Button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
            >
              Previous
            </Button>
            <span className="text-gray-700 dark:text-gray-300 self-center">
              Page {page}
            </span>
            <Button
              onClick={() => setPage((prev) => prev + 1)}
              disabled={posts && posts.length < 10}
            >
              Next
            </Button>
          </div>
        </>
      )}
    </Card>
  );
};