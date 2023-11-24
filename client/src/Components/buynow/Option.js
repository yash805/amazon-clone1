import React, { useContext } from 'react'
import { LoginContext } from "../context/ContextProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({deletedata,get}) => {
  const { account, setAccount } = useContext(LoginContext);


      const removedata = async (id) => {
        try {
            const res = await fetch(`https://amazon-clone-api-two.vercel.app/remove/${deletedata}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Authorization": account.tokens[0].token
                },
                credentials: "include"
            });

            const data = await res.json();
            // console.log(data);

            if (res.status === 400 || !data) {
                console.log("error aai remove time pr");
            } else {
              // console.log("deleted")
                setAccount(data)
                get();
                toast.success("Iteam remove from cart 😃!", {
                    position: "top-center"
                });
            }
        } catch (error) {
            console.log(error);
        }

    }
  return (
    <div className="add_remove_select">
    <select name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
    <p style={{ cursor: "pointer" }} onClick={()=>removedata(deletedata)}>Delete</p><span>|</span>
    <p className="forremovemedia">Save Or Later</p><span>|</span>
    <p className="forremovemedia">See More like this</p>
    <ToastContainer />
</div>
  )
}

export default Option
