
// src/FormComponent.js
import React, { useState } from 'react';

const FormComponent = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    city: '',
    server: '',
    role: '',
    signon: {
      mail: false,
      payroll: false,
      selfService: false
    }
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name in form.signon) {
      setForm(prev => ({
        ...prev,
        signon: {
          ...prev.signon,
          [name]: checked
        }
      }));
    } else if (type === 'radio') {
      setForm(prev => ({ ...prev, role: value }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleReset = () => {
    setForm({
      username: '',
      password: '',
      city: '',
      server: '',
      role: '',
      signon: {
        mail: false,
        payroll: false,
        selfService: false
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Form submitted. Check console for data.");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Novell Services Login</h2>

      <label>Username:
        <input type="text" name="username" value={form.username} onChange={handleChange} />
      </label>

      <label>Password:
        <input type="password" name="password" value={form.password} onChange={handleChange} />
      </label>

      <label>City of Employment:
        <input type="text" name="city" value={form.city} onChange={handleChange} />
      </label>

      <label>Web server:
        <select name="server" value={form.server} onChange={handleChange}>
          <option value="">-- Choose a server --</option>
          <option value="apache">Apache</option>
          <option value="nginx">Nginx</option>
          <option value="iis">IIS</option>
        </select>
      </label>

      <fieldset>
        <legend>Please specify your role:</legend>
        <label><input type="radio" name="role" value="Admin" checked={form.role === 'Admin'} onChange={handleChange} /> Admin</label>
        <label><input type="radio" name="role" value="Engineer" checked={form.role === 'Engineer'} onChange={handleChange} /> Engineer</label>
        <label><input type="radio" name="role" value="Manager" checked={form.role === 'Manager'} onChange={handleChange} /> Manager</label>
        <label><input type="radio" name="role" value="Guest" checked={form.role === 'Guest'} onChange={handleChange} /> Guest</label>
      </fieldset>

      <fieldset>
        <legend>Single Sign-on to the following:</legend>
        <label><input type="checkbox" name="mail" checked={form.signon.mail} onChange={handleChange} /> Mail</label>
        <label><input type="checkbox" name="payroll" checked={form.signon.payroll} onChange={handleChange} /> Payroll</label>
        <label><input type="checkbox" name="selfService" checked={form.signon.selfService} onChange={handleChange} /> Self-service</label>
      </fieldset>

      <div style={styles.buttonRow}>
        <button type="submit">Login</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </div>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: 'auto',
    backgroundColor: '#f2f2f2',
    padding: '20px',
    borderRadius: '10px',
    fontFamily: 'Arial',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px'
  }
};

export default FormComponent;
