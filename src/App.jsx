import React from "react";

class App extends React.Component {
 constructor(){
  super();
 
  this.cardRef = React.createRef();
  this.emailRef = React.createRef();
  
 }

  //   handleChange = (event) => {
  //     const {card } = this.state;
  //     this.setState (()=>({ [event.target.name]: event.target.value }), ()=>{
  //       if(card.length === 16){ 
  //         this.emailRef.current.focus();
  //       }
  //     });
  //   };
  // componentDidMount(){
  //   console.log(this.cardRef);
  //   this.cardRef.current.focus();
  // };
  handleSubmit = (event) =>{
    event.preventDefault();
    if(this.cardRef.current.value.length < 16){
      alert('invalid card number')
    }
   //send

   this.cardRef.current.value = '';
   this.emailRef.current.value = '';
  }

  render() {
  
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="card"
          placeholder="card"
          ref={this.cardRef}
          
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          ref={this.emailRef}
        />
      <button>Send</button>
      </form>
    );
  }
}

export default App;