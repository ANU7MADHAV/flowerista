import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await currentUser();
  console.log(user);
  if (!user) {
    redirect("/");
  }
  return <div>New User</div>;
};

export default page;
