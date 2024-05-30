import Link from "next/link";

const LocaleSwitcher = () => {
    return (
        <div>
            <Link href={"/en"}><button>English</button></Link>
            <br />
            <Link href={"/ar"}><button>Arabic</button></Link>
        </div>
    );
};

export default LocaleSwitcher;
