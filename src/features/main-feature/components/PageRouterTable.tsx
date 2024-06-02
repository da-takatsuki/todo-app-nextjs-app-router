export const PagesRouterTable = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mb-6">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              特徴
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">1ファイル = 1ページ</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              ファイル名がURLになる
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              ファイル名は何でもOK
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">pagesフォルダを使う</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
