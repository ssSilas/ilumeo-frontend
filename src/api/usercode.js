export default function getUsercode() {
  const usercodeString = sessionStorage.getItem('usercode');
  const user = JSON.parse(usercodeString);
  return user
}