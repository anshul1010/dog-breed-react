import { SORT_ITEMS, ASC, DESC } from "./../../utils/constant";

function BaseSort({ sort, onSort }) {
  return (
    <div className="flex text-sm font-medium justify-center text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        {SORT_ITEMS.map(({ key, value }) => {
          const isActive = key === sort.key;
          const activeAsc = isActive && sort.order === ASC;
          const activeDesc = isActive && sort.order === DESC;
          return (
            <li className="mr-2" key={key}>
              <a
                href="#"
                aria-current="page"
                key={key}
                onClick={() => {
                  const order = activeAsc ? DESC : ASC;
                  onSort({ key, order });
                }}
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                {activeAsc && <span>&darr;</span>}
                {activeDesc && <span>&uarr;</span>}
                {value}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default BaseSort;
