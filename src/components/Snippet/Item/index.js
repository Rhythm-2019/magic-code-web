import React from 'react'
import { SearchOutlined } from '@ant-design/icons';

export default function SnippetListItem() {
  return (
    <div>
        <Avatar size="large" icon={<UserOutlined />} />
        <p>Title</p>
        <p>Desc</p>
    </div>
  )
}
