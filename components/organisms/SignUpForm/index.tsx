import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const className = {
    label: classNames("form-label text-lg fw-medium color-palette-1 mb-10"),
  };

  const onSubmit = () => {
    const userForm = {
      email,
      name,
      password,
      username,
      phoneNumber,
    };
    localStorage.setItem("user-form", JSON.stringify(userForm));
    router.push("/sign-up-photo");
  };

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
      <p className="text-lg color-palette-1 m-0">
        Daftar dan bergabung dengan kami
      </p>
      <div className="pt-50">
        <label htmlFor="name" className={className.label}>
          Full Name
        </label>
        <input
          type="text"
          name="name"
          className="form-control rounded-pill text-lg"
          aria-describedby="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="pt-30">
        <label htmlFor="username" className={className.label}>
          Username
        </label>
        <input
          type="text"
          name="username"
          className="form-control rounded-pill text-lg"
          aria-describedby="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="pt-30">
        <label htmlFor="email" className={className.label}>
          Email Address
        </label>
        <input
          type="email"
          name="email"
          className="form-control rounded-pill text-lg"
          aria-describedby="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="pt-30">
        <label htmlFor="phoneNumber" className={className.label}>
          Phone Number
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          aria-describedby="phoneNumber"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="pt-30">
        <label htmlFor="password" className={className.label}>
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          aria-describedby="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        {/* <Link href="/sign-up-photo"> */}
        <button
          type="button"
          className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
          role="button"
          onClick={onSubmit}
        >
          Continue
        </button>
        {/* </Link> */}
        <Link href="/sign-in">
          <a
            className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
            role="button"
          >
            Sign In
          </a>
        </Link>
      </div>
    </>
  );
}
