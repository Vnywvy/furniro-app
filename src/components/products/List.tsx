import React from "react";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {items.map(renderItem)}
    </div>
  );
}
