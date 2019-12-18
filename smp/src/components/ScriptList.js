import { Table, Button } from 'antd'

const ScriptList = ({onDelete, scripts}) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Desc',
      dataIndex: 'desc',
      key: 'desc',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'creatTime',
      dataIndex: 'creatTime',
      key: 'creatTime',
    },
    {
      title: 'updateTime',
      dataIndex: 'updateTime',
      key: 'updateTime',
    },
    {
      title: 'Actions',
      key: 'id',
      render: (text, record) => {
        return (
          <div>
            <Button size="small">下载</Button>&nbsp;&nbsp;
            <Button size="small">编辑</Button>&nbsp;&nbsp;
            <Button size="small">删除</Button>
          </div>
        )
      }
    }
  ]
  return <Table rowKey="id" dataSource={scripts} columns={columns} />
};

export default ScriptList;