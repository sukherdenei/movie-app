import Image from "next/image";

export default async function Footer() {
  return (
    <div className=" gap-10 mt-10 bg-[#4338CA] w-full h-[280px]">
      <div className="max-w-[1280px] pt-5 h-[200px] flex cursor-pointer justify-between m-auto ">
        <div className="left">
          <Image src="./Logo.svg" alt="" width={100} height={100} />
          <p>© 2024 Movie Z. All Rights Reserved.</p>
        </div>
        <div className="middle">
          <p>Contact information</p>
          <div className="email-svg ">
            <div className="svg flex gap-5">
              <Image src="./Voip.svg" alt="" width={100} height={100} />
              <div>
                <h4>Email</h4>
                <h4>support@movieZ.com</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>Follow us</h4>
          <h4>Facebook Instagram Twitter Youtube</h4>
        </div>
      </div>
    </div>
  );
}
