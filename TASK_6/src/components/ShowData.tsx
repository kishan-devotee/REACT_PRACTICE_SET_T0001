import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const ShowData = (props: { api: string }) => {
  const [data, setData] = useState<User[] | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(props.api);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log("Error occurred while fetching data:", error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 300);
  }, [props.api]);

  return (
    <div>
      {data ? (
        data.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <h6>Email : {user.email}</h6>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShowData;
