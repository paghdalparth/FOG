import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useParams, useLocation } from "react-router-dom";


const EditUpload = () => {
    let { id } = useParams();
    let location = useLocation();
    const { product } = location.state;

    const [data, setData] = useState({
        name: product.name,
        title: product.title,
        category: product.category
    });
     
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const { name, value } = e.target;
    
        setData((prev) => {
          return {
            ...prev,
            [name]: value,
          };
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const dataResponse = await fetch(`http://localhost:3000/api/v1/update/${id}`, {
          method: "put",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        });
    
        const dataApi = await dataResponse.json();
    
        console.log("dataApi", dataApi);
    
        if (dataApi.success) {
          toast.success(dataApi.message);
          navigate("/add-category");
        }
    
        if (dataApi.error) {
          toast.error(dataApi.message);
        }
      };

  return (
    <div class="content-wrapper">
      <div class="row">

        <div class="col-md-6 grid-margin stretch-card ">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title text-primary">Edit Data</h4>
              <form class="forms-sample"  onSubmit={handleSubmit} >

                <div class="form-group">
                  <label for="exampleInputUsername1">Name</label>
                  <input
                      type="text"
                      name="name"
                      value={data.name}
                      onChange={handleOnChange}
                      class="form-control"
                      id="name"
                      placeholder="Enter Name"
                  />
                </div>

                <div class="form-group">
                  <label for="exampleInputUsername1">Title</label>
                  <input
                      type="text"
                      name="title"
                      value={data.title}
                      onChange={handleOnChange}
                      class="form-control"
                      id="title"
                      placeholder="Enter title"
                  />
                </div>

                <div class="form-group col-md-4">
                    <label for="exampleInputPassword1">Category</label>
                    <select
                      name="category"
                      id=""
                      className="form-control"
                      value={data.category}
                      onChange={handleOnChange}
                    >
                      <option value="" disabled selected hidden>
                        Select Category
                      </option>
                      <option value="Setting">Setting</option>
                      <option value="Rules">Rules</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>

                <button type="submit" class="btn btn-primary mr-2">
                  Submit
                </button>
                
                <button class="btn btn-light">Cancel</button>

              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default EditUpload
