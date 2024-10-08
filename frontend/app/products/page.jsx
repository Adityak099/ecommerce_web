import Navbar from "@components/Common/Navbar/Navbar";
import Content from "../../components/content/Content";
import axios from "axios";
import BASE_URL from "constants/constants";
import Cookies from "js-cookie";
export const metadata = {
  title: "Apna Bazar | Products",
  description:
    "Get your daily essentials delivered to your doorstep in minutes!",
};
async function page() {
  const res = await axios.get(`${BASE_URL}/products`);
  const productsData = res.data.data.products;
  return (
    <>
      <Navbar />
      <Content data={productsData} />;
    </>
  );
}
export default page;
