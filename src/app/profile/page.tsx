import { currentUser } from "@clerk/nextjs";

export default async function ProfilePage() {
  const user = await currentUser();

  if (!user) {
    return <p>Không có thông tin người dùng. Vui lòng đăng nhập.</p>;
  }

  return (
    <div>
      <h1>Thông tin cá nhân</h1>
      <p>Tên: {user.firstName} {user.lastName}</p>
      <p>Email: {user.emailAddresses[0].emailAddress}</p>
    </div>
  );
}
