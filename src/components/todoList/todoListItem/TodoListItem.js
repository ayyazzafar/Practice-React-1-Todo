import { useState } from "react";

function TodoListItem(props){


    let [item, setItem ] = useState({...props.item} );



    return (
        <div className="row px-3 align-items-center todo-item rounded">
        <div className="col-auto m-1 p-0 d-flex align-items-center">
          <h2 className="m-0 p-0">
            <i
              className="fa fa-square-o text-primary btn m-0 p-0"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Mark as complete"
            ></i>
            <i
              className="fa fa-check-square-o text-primary btn m-0 p-0 d-none"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Mark as todo"
            ></i>
          </h2>
        </div>
        <div className="col px-1 m-1 d-flex align-items-center">
          <input
            type="text"
            className={'form-control form-control-lg border-0 edit-todo-input '+(item.editMode?null:'bg-transparent')+' rounded px-3'}
            readOnly={!item.editMode}
            onChange={(event) => {
              setItem({...item, title: event.currentTarget.value});
            }}
            value={item.title}  
            title={item.title}
          />
       
        </div>
        {item.dueDate?<div className="col-auto m-1 p-0 px-3">
          <div className="row">
            <div className="col-auto d-flex align-items-center rounded bg-white border border-warning">
              <i
                className="fa fa-hourglass-2 my-2 px-2 text-warning btn"
                data-toggle="tooltip"
                data-placement="bottom"
                title=""
                data-original-title="Due on date"
              ></i>
              <h6 className="text my-2 pr-2">28th Jun 2020</h6>
            </div>
          </div>
        </div>:null}
        <div className="col-auto m-1 p-0 todo-actions">
          <div className="row d-flex align-items-center justify-content-end">
            <h5 className="m-0 p-0 px-2">
              {
                item.editMode? <i
                onClick={()=>{
                  setItem({...item, editMode: false});
                }}
                  className="fa fa-check text-info btn m-0 p-0"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Edit todo"
                ></i>: (<i
                  onClick={()=>{
                    setItem({...item, editMode: true});
                  }}
                    className="fa fa-pencil text-info btn m-0 p-0"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Edit todo"
                  ></i>)
              }
            </h5>
            <h5 className="m-0 p-0 px-2">
              <i
              onClick={()=>{
                props.onDelete(item.id)
              }}
                className="fa fa-trash-o text-danger btn m-0 p-0"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Delete todo"
              ></i>
            </h5>
          </div>
          <div className="row todo-created-info">
            <div className="col-auto d-flex align-items-center pr-2">
              <i
                className="fa fa-info-circle my-2 px-2 text-black-50 btn"
                data-toggle="tooltip"
                data-placement="bottom"
                title=""
                data-original-title="Created date"
              ></i>
              <label className="date-label my-2 text-black-50">
                28th Jun 2020
              </label>
            </div>
          </div>
        </div>
      </div>
      
    )
}


export default TodoListItem;