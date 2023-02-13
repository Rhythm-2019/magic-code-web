import { Input } from 'antd';
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
const { Search } = Input;
const onSearch = (value) => console.log(value);
function SinppetsHome(props) {
    return (
        <div>
            <Input
                placeholder="输入你感兴趣的关键词"
                allowClear
                size="large"
                onSearch={onSearch}
                bordered={false}
                prefix={<SearchOutlined />}
                style={{ borderBottom: "1px solid gray", width: "600px" }}
            />
            <div>
                
            </div>
        </div>

    );
}

export default SinppetsHome;