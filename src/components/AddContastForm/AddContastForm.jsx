import { TextField, Button } from "@mui/material"
import {Form, Label} from './AddContactForm.styled'
import { Component } from "react"
import { nanoid } from "nanoid";


export class AddContastForm extends Component {
    state = {
        name: '',
        number: '',
      };


handalCange = (evt) => {
this.setState({
    [evt.target.name]: evt.target.value,
});
};

    render () {
            return <Form onSubmit={evt => {
            evt.preventDefault();
            this.props.addContast({id: nanoid(5),...this.state});
            this.setState({
                name: '',
                number: '',
            });
            }}>
        <Label> Name</Label>
        <TextField
         onChange={this.handalCange} 
  id="name" 
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required label="Name" variant="outlined" 
  value={this.state.name}/> 

  <Label> Number</Label>

<TextField onChange={this.handalCange}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required label="Number" variant="outlined"
  value={this.state.number}
/>
 <Button type="submit" variant="outlined">Add contact</Button>
        
    </Form>
    }

} 