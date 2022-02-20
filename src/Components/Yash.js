import "antd/dist/antd.css";
import "./Table.css";
import { Button, Table, Modal, Input, DatePicker } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function Yash() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingUser, setEditingUser] = useState(null);


  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "John",
      email: "john@gmail.com",
      contact: "9999999999",
      dob: "8/5/1996",
    },
    {
      id: 2,
      name: "David",
      email: "david@gmail.com",
      contact: "9999999999",
      dob: "8/6/1997",
    },
   
  ]);
  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
      width: '5%',
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "Contact",
      dataIndex: "contact",
    },
    {
        key: "5",
        title: "D.O.B",
        dataIndex: "dob",
      },
    {
      key: "6",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditUser(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteUser(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];
  
  const onAddUser = () => {
    const randomNumber = parseInt(Math.random() * 50);
    const newUser = {
      id: randomNumber,
      name: "",
      email: "",
      contact: "",
      dob: "",
    };
    setDataSource((pre) => {
      return [...pre, newUser];
    });
  };
  const onDeleteUser = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this user record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((user) => user.id !== record.id);
        });
      },
    });
  };
  const onEditUser = (record) => {
    setIsEditing(true);
    setEditingUser({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingUser(null);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={onAddUser} className='y' >Add a User </Button>
        <Table columns={columns} dataSource={dataSource} className="tab"></Table>
        <Modal style={{display:'block', align:'center'}}
          title="Edit User"
          className="mm"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((user) => {
                if (user.id === editingUser.id) {
                  return editingUser;
                } else {
                  return user;
                }
              });
            });
            resetEditing();
          }}
        > 
        <label className="lab" >Name</label>
          <Input placeholder= "Enter your Name"
          className="mm"
            value={editingUser?.name}
            onChange={(e) => {
              setEditingUser((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
          <label className="lab" >Email</label>
          <Input placeholder= "Enter your Email"
          className="mm"
            value={editingUser?.email}
            onChange={(e) => {
              setEditingUser((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
          />
          <label className="lab" >Contact</label>
          <Input placeholder= "Enter your contact number"
          className="mm"
            value={editingUser?.contact}
            onChange={(e) => {
              setEditingUser((pre) => {
                return { ...pre, contact: e.target.value };
              });
            }}
          />
          <label className="lab" >Date of Birth</label>
          <Input placeholder= "Enter your D.O.B"
          className="mm"
            value={editingUser?.dob}
            onChange={(e) => {
              setEditingUser((pre) => {
                return { ...pre, dob: e.target.value };
              });
            }}
          />
         </Modal>
      </header>
    </div>
  );
}

export default Yash;
