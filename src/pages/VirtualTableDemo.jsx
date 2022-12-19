import React, { useState, useMemo, useEffect } from 'react';
import { Button, Table } from 'antd';
import { VList, scrollTo } from 'virtuallist-antd';
import 'antd/dist/antd.css';

const fakeData = [];
for (let i = 0; i < 1000; i++) {
  fakeData.push({
    key: i,
    name: `name ${i}`,
    age: 32,
    address: `address ${i}`,
  });
}

const TableDemo = props => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setDataSource(fakeData);
  }, []);

  const columns = [
    {
      title: 'Full Name',
      width: 180,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
      sorter: (a, b) => {
        return a.age - b.age;
      },
    },
    {
      title: 'Column 1',
      dataIndex: 'address',
      key: '1',
      width: 150,
      sorter: true,
    },
    {
      title: 'Column 2',
      dataIndex: 'address',
      key: '2',
      width: 150,
      sorter: true,
    },
    {
      title: 'Column 3',
      dataIndex: 'address',
      key: '3',
      width: 150,
    },
    {
      title: 'Column 4',
      dataIndex: 'address',
      key: '4',
      width: 150,
    },
    {
      title: 'Column 5',
      dataIndex: 'address',
      key: '5',
      width: 150,
    },
    {
      title: 'Column 6',
      dataIndex: 'address',
      key: '6',
      width: 150,
    },
    {
      title: 'Column 7',
      dataIndex: 'address',
      key: '7',
      width: 150,
    },
    { title: 'Column 8', dataIndex: 'address', key: '8', width: 150 },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (text, record, index) => <a onClick={() => handleDelete(record)}>删除</a>,
    },
  ];

  const handleDelete = record => {
    const filterData = dataSource?.filter(data => data.key < record.key);
    setDataSource(filterData);
  };

  const vc = useMemo(() => {
    return VList({
      height: 700,
      resetTopWhenDataChange: false,
    });
  }, []);

  return (
    <>
      <Button onClick={() => scrollTo({ row: 11 })}>滚动到第一屏最后几条, 删除后面的数据至不出滚动条</Button>
      <Table
        columns={columns}
        dataSource={dataSource}
        scroll={{
          y: 700,
        }}
        components={vc}
        pagination={false}
      />
    </>
  );
};

export default TableDemo;
