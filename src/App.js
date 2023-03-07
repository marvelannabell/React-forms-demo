
import { useState } from "react";

function App() {
  // 1.pass default value by React , not the property defaultvalue of input tag
  // const [username, setUsername] = useState('Peter');


  // 2.pass default value by React when we have all input fields in one state
  // const[values,setValues]=useState({username: "gosho",age: '10'})

  const [values, setValues] = useState({
    username: '',
    password: '',
    age: '',
    bio: '',
    gender: 'f',
    // userType: 'individual'


  })
  const changeHandler = (e) => {
    setValues(state => ({
      ...state, [e.target.name]: e.target.value
      // e.target.type == 'checkbox' ? e.target.checked : e.target.value
    }))
  }

  // 1.useState for every input input field that is set onChange inline
  // const [username, setUsername] = useState('Peter');
  // const [password,setPassword]=useState('');
  // const[age,setAge]=useState('')
  // const [bio,setBio]=useState('');
  // const [gender, setGender]= useState('');
  const [userType, setUserType] = useState('individual');
  const [isChekedTac, setIsChekedTac] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    let values = Object.fromEntries(formData);
    console.log(values);

  }

  // const usernameChangeHandler = (e) => {
  //   console.log(e.target.value);
  //   console.log(e.target.name);
  //   setUsername(e.target.value)
  // }

  return (
    // 1.Inline added onChange handlers
    <div className="App">
      <header className="App-header">
        <form onSubmit={submitHandler}>

          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              // value and onChange event works together
              value={values.username}
              onChange={changeHandler}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" value={values.password} onChange={changeHandler} />
          </div>


          <div>
            <label htmlFor="age">Age</label>
            <input id="age" type="number" name="age" value={values.age} onChange={changeHandler} />
          </div>

          <div>
            <label htmlFor="bio"></label>
            <textarea name="bio" id="bio" cols="30" rows="10" value={values.bio} onChange={changeHandler}></textarea>
          </div>

          <div>
            <label htmlFor="gender">Gendef</label>
            <select name="gender" id="gender" value={values.gender} onChange={changeHandler}>
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
          </div>

          <div>
            <label htmlFor="individual-user-type">Individual:</label>
            <input
              type="radio"
              name="user-type"
              id="individual-user-type"
              value="individual"
              checked={userType === "individual"}
              onChange={(e) => setUserType(e.target.value)}
            />
            <label htmlFor="corporate-user-type">Corporate:</label>
            <input
              type="radio"
              name="user-type"
              id="corporate-user-type"
              value="corporate"
              checked={userType === "corporate"}
              onChange={(e) => setUserType(e.target.value)} 
              />
          </div>

          <div>
            <label htmlFor="tac">Terms and conditions</label>
            <input
              type="checkbox"
              name="tac"
              id="tac"
              checked={isChekedTac}
              onChange={(e) => setIsChekedTac(!isChekedTac)} />
          </div>

          <div>
            <input type="submit" value="Login" />
          </div>

        </form>

      </header>

    </div>
  );
}

export default App;
