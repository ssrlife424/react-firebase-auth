import { useContext } from "react";
import { AuthContext } from "../../context";

function ProfilePage() {
  const { user, handleLogout } = useContext(AuthContext);
  return (
    <div>
      <h3>{user.displayName}</h3>
      <p>{user.email}</p>
      <button onClick={handleLogout}>LogOut</button>
    </div>
  );
}
export default ProfilePage;
