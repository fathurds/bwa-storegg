import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { setSignUp } from "../services/auth";
import { getGameCategory } from "../services/player";
import { toast } from "react-toastify";
import { CategoryTypes } from "../services/data-types";
import Head from "next/head";

export default function SignUpPhoto() {
  const [categories, setCategories] = useState([]);
  const [favorite, setFavorite] = useState("");
  const [image, setImage] = useState<any>("");
  const [imagePreview, setImagePreview] = useState("/icon/upload.svg");
  const [localForm, setLocalForm] = useState({
    name: "",
    email: "",
  });

  const router = useRouter();

  const getGameCategoryAPI = useCallback(async () => {
    const data = await getGameCategory();
    setCategories(data.data);
    setFavorite(data.data[0]._id);
  }, [getGameCategory]);

  useEffect(() => {
    getGameCategoryAPI();
  }, []);

  useEffect(() => {
    const getLocalForm = localStorage.getItem("user-form");
    setLocalForm(JSON.parse(getLocalForm!));
  }, []);

  const onSubmit = async () => {
    const getLocalForm = await localStorage.getItem("user-form");
    const form = JSON.parse(getLocalForm!);
    const data = new FormData();

    data.append("image", image);
    data.append("email", form.email);
    data.append("name", form.name);
    data.append("username", form.username);
    data.append("password", form.password);
    data.append("favorite", favorite);
    data.append("phoneNumber", form.phoneNumber);

    const result = await setSignUp(data);
    if (result.error) {
      toast.error(result.message);
    } else {
      toast.success("Register berhasil");
      localStorage.removeItem("user-form");
      router.push("/sign-up-success");
    }
  };

  return (
    <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
      <Head>
        <title>Sign Up - StoreGG</title>
      </Head>
      <div className="container mx-auto">
        <form action="">
          <div className="form-input d-md-block d-flex flex-column">
            <div>
              <div className="mb-20">
                <div className="image-upload text-center">
                  <label htmlFor="avatar">
                    <Image
                      src={imagePreview}
                      width={120}
                      height={120}
                      className="img-upload"
                    />
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                      const img = e.target.files![0];
                      setImagePreview(URL.createObjectURL(img));
                      setImage(img);
                    }}
                  />
                </div>
              </div>
              <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                {localForm.name}
              </h2>
              <p className="text-lg text-center color-palette-1 m-0">
                {localForm.email}
              </p>
              <div className="pt-50 pb-50">
                <label
                  htmlFor="category"
                  className="form-label text-lg fw-medium color-palette-1 mb-10"
                >
                  Favorite Game
                </label>
                <select
                  id="category"
                  name="category"
                  className="form-select d-block w-100 rounded-pill text-lg"
                  aria-label="Favorite Game"
                  value={favorite}
                  onChange={(e) => setFavorite(e.target.value)}
                >
                  {categories.map((category: CategoryTypes) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="button-group d-flex flex-column mx-auto">
              {/* <Link href="/sign-up-photo-success"> */}
              <button
                type="button"
                className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                onClick={onSubmit}
              >
                Create My Account
              </button>
              {/* </Link> */}
              <a
                className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                href="#"
                role="button"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
