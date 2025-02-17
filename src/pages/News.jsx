import { Suspense } from "react";
import HomeNews from "../components/homeComponents/HomeNews";

export default function News() {
  return (
    <Suspense fallback="..."><HomeNews /></Suspense>
  )
}
