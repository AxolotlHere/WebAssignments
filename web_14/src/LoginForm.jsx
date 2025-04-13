
import React from 'react';

function LoginForm() {
  return (
    <form style={{ padding: "20px", maxWidth: "400px", margin: "auto", fontFamily: "serif" }}>
      <h2 style={{ textAlign: "center" }}>Novell Services Login</h2>

      <label>Username: <input type="text" name="username" /></label><br /><br />
      <label>Password: <input type="password" name="password" /></label><br /><br />
      <label>City of Employment: <input type="text" name="city" /></label><br /><br />
      <label>Web server:
        <select name="server">
          <option value="">-- Choose a server --</option>
          <option value="apache">Apache</option>
          <option value="nginx">Nginx</option>
        </select>
      </label><br /><br />

      <div>Please specify your role:</div>
      <label><input type="radio" name="role" value="admin" /> Admin</label><br />
      <label><input type="radio" name="role" value="engineer" /> Engineer</label><br />
      <label><input type="radio" name="role" value="manager" /> Manager</label><br />
      <label><input type="radio" name="role" value="guest" /> Guest</label><br /><br />

      <div>Single Sign-on to the following:</div>
      <label><input type="checkbox" name="sso" value="mail" /> Mail</label><br />
      <label><input type="checkbox" name="sso" value="payroll" /> Payroll</label><br />
      <label><input type="checkbox" name="sso" value="self-service" /> Self-service</label><br /><br />

      <button type="submit">Login</button>
      <button type="reset" style={{ marginLeft: "10px" }}>Reset</button>
    </form>
  );
}

export default LoginForm;
