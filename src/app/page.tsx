import { useAuth, useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const { userId } = useAuth();
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/sign-in");
  };

  return (
    <div>
      <h1>Trang Chủ</h1>
      {userId ? (
        <div>
          <p>Bạn đã đăng nhập</p>
          <Link href="/profile">Thông tin cá nhân</Link>
          <button onClick={handleSignOut}>Đăng xuất</button>
        </div>
      ) : (
        <Link href="/sign-in">Đăng nhập</Link>
      )}
    </div>
  );
}