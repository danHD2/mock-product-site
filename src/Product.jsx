import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min"

function Product() {
 const { id } = useParams()
 const [name, setName] = useState('')
 const [desc, setDesc] = useState('');
 const [thumb, setThumb] = useState('');
 const [success, setSuccess] = useState(false);
 const [error, setError] = useState(false);
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [check, setCheck] = useState(false); 
const clickCheck = () => setCheck(!check);

 useEffect(()=>{
    fetch(`../Data/${id}.json`)
        .then(res => {
            return res.json()
        })
            .then(data => {
                setName(data.name);
                setDesc(data.description);
                setThumb(data.thumbnail);
                
            })
 }, [])

 function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        setError(true);
        return false;
    } else {
        setError(false);
        return true
    }
   
 }

 function validateName() {
    if (username === '') {
        return false;
    }
    return true;
 }

 const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    if (validateEmail && validateName && check) {
        setSuccess(true);
        console.log(username, email, "does he really want it?", check, "product id:",id)
    }
 }

    return (
        <>
        <div className="p-10">
        <div className="flex flex-col">
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
        </div>
        </div>
        <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold">Product #{ id } - {name}</h1>
        <p className="py-10">{desc}</p>
        <img src={thumb} alt="Product Image" className="w-96"/>
        </div>
        
        <div className="flex flex-col items-center py-10">
            {!success ? (
                <div className="flex flex-col text-center">
                <h2 className={`"font-semibold ${error ? "text-red-500" : "text-white"}`}>{!error ? "Want this?" : "You don't want it bad enough"}</h2>
                <form onSubmit={handleSubmit} className="flex flex-col">
                <input type="text" placeholder="Your Name" onChange={(e) => setUsername(e.target.value)} className={`"p-1 my-2 text-black ${username === '' ? "border-red-500" : "border-slate-500"}`}/>
                <input type="text" placeholder="Your Email" onChange={(e)=>setEmail(e.target.value)} className={`"p-1 my-2 text-black ${!validateEmail ? "border-red-500" : "border-slate-500"}`}/>
                <div>
                <input type="checkbox" onClick={clickCheck} name="check" id="check" />
                <label className="pl-2" htmlFor="check">Do you really want it?</label>
                </div>
                <button type="submit" className="border p-1 rounded-full mt-5 hover:bg-slate-600">I want this!</button>
            </form>
            </div>
            ) : (
                <div>
                <img className="w-24" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD////7+/v39/eHh4c/Pz+2trZ4eHj19fXZ2dmYmJjw8PC6uro7OzsdHR3s7OzMzMxQUFBpaWnf398jIyNgYGChoaGMjIywsLDW1tYSEhJKSkpCQkJUVFTGxsbNzc0zMzNcXFydnZ0tLS19fX1wcHALCwsYGBjN1m2eAAAE1klEQVR4nO2d6XbiMAyFMUsh7JSwFGigBTrv/4YTMi0TYkuEqTuyde73t8vRbWztoY0GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwGNs+9lM2oafY9TOWiZnJG3Ij7BZrCfmk660Mf45nqY9c6U3lrbHM4d+Ysq8HKQt8sp2Ob+RN+mn0ib5ZLuc3Mgz2ULaJJ903ivyeuuDtE0eSVe3hzM/nqsPaaM8cp5W5Jm5pgAxWzer+hJF12/crp7OXN+btFX+mA1btj5Fz++UWPLM5FnaKm+ky56tb3CSNssbs6Etz7RW0mZ54/nFoc+sN9J2+aJre8+caUfaLl+sJi59ehxM344OF/rSdnnig9CXaamP+o7wcDmgWiJ8e+DUZ5bShnmi6/QveQmxlbbMDwtnfMhREuI7VvH3iZIO02ZN6NPyANvuAJHfQB197FfqApp3adO8MHYVEAUTHS70RB1Q8yRtmhc6zgrpQlNHG61P6TPJUdo2H2yJFMZoydKWpL6WijpwR4YIM1dxQukbqMOHpqQLNUZFq/BM6xuoiPJPtMBEwyy+Q7sYHVewS+vT0Uwj68AcDc2mlDmhKnzMwt0pLJhraIe2mRP6Im2cD7grOJQ2zgMfe0aghlLiQFdKOvppW7JXYXRsTTKJqI4wyDlRo2F5makFTVNDnOeiRGsnbZ0HmFrJNDUsHmTaBVIzs+KIahi7sAI13EH2iGoXaNQL1BAHuTBhXqWt8wA9lsjRMJhYcQI19LVPnEANXcMFJ1BDRT+y3o0ooaEnMyb27wpUdNWYvq+ZSBvnA3JBJqepofHLlfQqIv0zJ1BDW+3IudEA48S4Pdwn++EDOQjnZbKfM/Qf2fz1GU81m35cuh2eG327aVTv6zRVuAlveG7USkzup5NsLhNePWHvvOx/3fkR7hKGtw27c1g54FsPXEkYnpchrhR31GaMwMF/s7s+xLyoTf8ENyIMsffbIWwl/Q03n2D+LoJQ23WExFdGYICX8ALp+t0SmTMa4iUs2FHrL665O+dHwx2Cbqj4dra+lbq19DMPg5RaMLDKPGYlNuy2xZawujr541YRgktHb6GWDCrOg2k9BV/0UuVQUv6md1pgoIGiDOVtSvu8KV1S9O4l6wEwooz/m6cw2Ux4JZMDct/nK8wdaIGR9LepYfzXh9zR/dGWrOG1GVO5zb74MnmMXZlBoJAt0CJboZtPEfjRL0gReW6zIQWG13pioCL6YMOk3GEWhQRv9EEk05nk/q8NCfKc0o40xMYFBzf0dLKWtvhR2JGSg1hCYQlu7ukg+JLCZsO80mMTdtlLwC7cV4lzbY1766VCpK9KprUFNmN92ZXdVSsT72s+3PSsRLAd4Ptw06USEUaKK9z05cpc2spvUSd5i/sDfmsExb20jd/kflAMdw5TD6ax9oeIWhcETH+7ILay0AE3rtfwCO9Vigdp83zAvQuj4RE2GkdGoYa3mRrcFrCOR9hgnE3ssfAK5WxiT2dKEJmNhj31T9zzpsi63DzOaUUUA9/aOMqo8Pa4v4Xj9buoZk01sHo2TWmLfGNtWwb4usg3qQwyemr+eciVyuaihg/SqTIuS9QVKa5cU/Cpio+NdXJeZ9lwpVcfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHuU3hcEvsdaq9/YAAAAASUVORK5CYII=" alt="Success"/>
                <h2>You&apos;ll get it!</h2>
            </div>
            )}
        </div>
           


        </>
    )
}

export default Product