import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { useNavigate } from "react-router-dom";
import { setCurrentPortfolio } from "../store/portfolioSlice";
import { Star } from "lucide-react";
import { useState } from "react";

const bg = ["bg-yellow-200", "bg-yellow-300", "bg-yellow-100", "bg-yellow-50"];

export default function ProfessionalsList() {
  const portfolios = useSelector((st: RootState) => st.portfolio.portfolios);
  const filter = useSelector((st: RootState) => st.portfolio.filterBy);
  const [search, setSearch] = useState("");
  const nav = useNavigate();
  const dispatch = useDispatch();

  const filtered = portfolios.filter(
    (p) =>
      (!filter ||
        p.hero.title?.toLowerCase().includes(filter) ||
        p.skills.some((s) => s.name.toLowerCase().includes(filter))) &&
      (p.hero.name.toLowerCase().includes(search) ||
        p.hero.title?.toLowerCase().includes(search))
  );

  return (
    <div className="min-h-screen bg-yellow-50 py-10">
      <div className="max-w-6xl mx-auto px-2">
        <div className="mb-4 flex gap-2">
          <input
            className="input flex-1"
            placeholder="Search name/title..."
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
          <input
            className="input flex-1"
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
        <div className="grid md:grid-cols-4 gap-5">
          {filtered.length === 0 && (
            <p className="col-span-4 text-center">No professionals.</p>
          )}
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className={`${
                bg[i % bg.length]
              } rounded-2xl p-5 flex flex-col gap-2 items-center shadow-md`}
            >
              <img
                src={p.hero.profileImage}
                alt=""
                className="w-24 h-24 rounded-full object-cover mb-1 bg-yellow-300"
              />
              <div className="font-bold text-lg">{p.hero.name}</div>
              <div className="text-sm py-1 px-3 font-bold bg-black text-white rounded-full mb-1">
                {p.hero.title}
              </div>
              <div className="flex items-center gap-1">
                <Star className="text-yellow-600 w-4 h-4 fill-current" />
                <span className="text-lg">{4.8}</span>
              </div>
              <div className="text-center text-xs text-gray-700">
                {p.about.bio?.slice(0, 60)}
              </div>
              <div className="flex flex-wrap gap-1 mt-1">
                {p.skills.slice(0, 2).map((s) => (
                  <span
                    className="bg-white px-2 py-1 text-xs rounded border border-gray-100"
                    key={s.name}
                  >
                    {s.name}
                  </span>
                ))}
                {p.skills.length > 2 && (
                  <span className="bg-black text-white px-1 py-1 text-xs rounded">
                    +{p.skills.length - 2}
                  </span>
                )}
              </div>
              <div className="flex gap-2 mt-2">
                <button
                  className="bg-accent text-white text-xs px-4 py-1 rounded-full"
                  onClick={() => nav(`/portfolio/${p.id}`)}
                >
                  View Portfolio
                </button>
                <button
                  className="bg-yellow-400 px-4 py-1 rounded text-xs font-bold"
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
      <style>{`.input{ padding:0.5rem; border-radius:0.5rem; border:1px solid #ececec; }`}</style>
    </div>
  );
}
