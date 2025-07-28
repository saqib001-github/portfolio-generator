import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { useNavigate } from "react-router-dom";
import { setCurrentPortfolio } from "../store/portfolioSlice";
import { Star } from "lucide-react";
import { useState } from "react";

// Theme palette for backgrounds
const bg = [
  "bg-yellow-200",
  "bg-yellow-300",
  "bg-yellow-100",
  "bg-yellow-50",
];

export default function ProfessionalsList() {
  const portfolios = useSelector((st: RootState) => st.portfolio.portfolios);
  const filter = useSelector((st: RootState) => st.portfolio.filterBy);
  const [search, setSearch] = useState("");
  const nav = useNavigate();
  const dispatch = useDispatch();

  // Filtering logic
  const filtered = portfolios.filter(
    (p) =>
      (!filter ||
        p.hero.title?.toLowerCase().includes(filter) ||
        p.skills.some((s) => s.name.toLowerCase().includes(filter))) &&
      (p.hero.name.toLowerCase().includes(search) ||
        p.hero.title?.toLowerCase().includes(search))
  );

  return (
    <div className="min-h-screen bg-gradient-to-tr from-yellow-50 to-yellow-200 py-10 px-2">
      <div className="max-w-7xl mx-auto">
        {/* Search + Filter Bar */}
        <div className="mb-8 flex flex-col md:flex-row gap-3 md:gap-4">
          <Input
            placeholder="Search name/title..."
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
          <Input
            placeholder="Filter by skill/title..."
            value={filter}
            onChange={(e) =>
              dispatch({
                type: "portfolio/setFilterBy",
                payload: e.target.value.toLowerCase(),
              })
            }
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.length === 0 && (
            <p className="col-span-4 text-center text-lg text-gray-500 mb-12">
              No professionals found.
            </p>
          )}
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className={`group transition-all duration-250 hover:-translate-y-1 hover:shadow-2xl hover:border-yellow-400 border border-transparent ${bg[i % bg.length]} rounded-2xl p-6 flex flex-col items-center shadow-md`}
            >
              <div className="flex flex-col items-center">
                <img
                  src={p.hero.profileImage}
                  alt=""
                  className="w-24 h-24 rounded-full object-cover mb-3 border-4 border-white shadow bg-yellow-300 ring-2 ring-yellow-400 group-hover:ring-accent transition"
                />
                <div className="font-extrabold text-xl text-gray-900 mb-1 text-center">
                  {p.hero.name}
                </div>
                <div className="text-xs md:text-sm px-3 py-1 font-bold bg-black text-white rounded-full mb-2 text-center">
                  {p.hero.title}
                </div>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <Star className="text-yellow-500 w-5 h-5 fill-current" />
                <span className="text-lg font-semibold text-gray-800">4.8</span>
              </div>
              <div className="text-center text-xs text-gray-700 mb-2 min-h-[2.5rem]">
                {p.about.bio?.slice(0, 60)}
                {p.about.bio?.length > 60 ? "..." : ""}
              </div>
              {/* Skill badges */}
              <div className="flex flex-wrap gap-2 mb-3 justify-center">
                {p.skills.slice(0, 2).map((s) => (
                  <span
                    key={s.name}
                    className="bg-white/70 px-2 py-1 text-xs rounded-full border font-medium border-gray-200 text-gray-700"
                  >
                    {s.name}
                  </span>
                ))}
                {p.skills.length > 2 && (
                  <span className="bg-yellow-500 text-white px-2 py-1 text-xs rounded-full font-bold">
                    +{p.skills.length - 2}
                  </span>
                )}
              </div>
              {/* Action buttons */}
              <div className="flex gap-2 w-full justify-center mt-auto">
                <button
                  className="bg-accent hover:bg-yellow-500 shadow text-white text-xs px-4 py-1.5 rounded-full font-semibold transition"
                  onClick={() => nav(`/portfolio/${p.id}`)}
                >
                  View Portfolio
                </button>
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-1.5 rounded-full text-xs font-bold shadow transition"
                  onClick={() => {
                    dispatch(setCurrentPortfolio(p));
                    nav("/form");
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Accent utility for View button */}
      <style>{`
        .bg-accent { background: #FFA500 !important; }
        .hover\\:bg-accent:hover { background: #ffb933 !important; }
        .input { padding:0.5rem; border-radius:0.5rem; border:1px solid #ececec; outline:none; font-size:1rem; }
        .input:focus { border-color: #fff700; box-shadow: 0 0 0 1.5px #FFD60022; }
      `}</style>
    </div>
  );
}

// --- Reusable Input Helper ---
function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={
        "input flex-1 " +
        (props.className ?? "")
      }
    />
  );
}
