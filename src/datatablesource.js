export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Ziad",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5SS1MmztLGVK-Z9PhBqG_bafAfMxzGMpmE6g_vnk&s',
      status: "active",
      email: "Ziad@gmail.com",
      age: 23,
    },
    {
      id: 2,
      username: "Kareem",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8eYVDkimHKFiC_S8L_q8uEBPLTiE6hlskqnBh826O&s",
      email: "Kareem@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Mariam",
      img: "https://deepotech.com/wp-content/uploads/2022/01/%D8%B5%D9%88%D8%B1-%D8%A8%D9%86%D8%A7%D8%AA-%D8%AD%D9%84%D9%88%D9%87-5.jpg",
      email: "Mariam@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Asmaa",
      img: "https://i.pinimg.com/736x/a9/a3/bf/a9a3bf18af2fc1728d86064719fc92a7.jpg",
      email: "Asmaa@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Mohamed",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwviSUcxu_72XA-2TZ1VWOueK4dWcjASINZ9KV9Vw&s",
      email: "Mohamed@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Samir",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFM0KRi8otNXvx7nxwQWU47aJffuhuS1QGjQ&usqp=CAU",
      email: "Samir@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Nader",
      img: "https://1.bp.blogspot.com/-tGtZHSk8tVc/YUHj4cCxRiI/AAAAAAAAYwE/huSinoocTNgpwAPQDemkAS4j7Cd4OxkzACLcBGAsYHQ/s490/%25D8%25B5%25D9%2588%25D8%25B1-%25D8%25B4%25D8%25A8%25D8%25A7%25D8%25A8%2B%25283%2529.jpg",
      email: "Nader@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Karma",
      img: "https://i.ytimg.com/vi/_2k1xWx4gC8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDebbKerbF38fVUZ_fisfDX4VGkKA",
      email: "Karma@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Ahmed",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnez-MclSMjRLPSls76ILu6hxypH7voHoRyA&usqp=CAU",
      email: "Ahmed@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Lamis",
      img: "https://external-preview.redd.it/TaekWwyxzogtl2SWeuA8izFs2sI-rUple45wLEYjgSY.jpg?width=640&crop=smart&auto=webp&s=d8798441cc2edee242d5e3b1216ef4ae7ce01886",
      email: "Lamis@gmail.com",
      status: "active",
      age: 65,
    },
  ];