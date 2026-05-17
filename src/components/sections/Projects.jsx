import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import AnimatedSection from "../ui/AnimatedSection";
import { projects, projectFilters } from "../../data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <AnimatedSection
      id="projects"
      className="py-20 sm:py-24 lg:py-28"
      aria-labelledby="projects-heading"
    >
      <div className="section-container">
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          description="Production-style applications spanning e-commerce, portals, APIs, and modern React frontends."
        />

        <div
          className="mb-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Filter projects"
        >
          {projectFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                filter === f.id
                  ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/30"
                  : "glass text-slate-400 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group glass overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-900/50">
                  <img
                    src={project.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      if (
                        project.fallbackImage &&
                        e.currentTarget.src !== project.fallbackImage
                      ) {
                        e.currentTarget.src = project.fallbackImage;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-5 sm:p-6">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <Layers
                      className="h-5 w-5 shrink-0 text-indigo-400"
                      aria-hidden
                    />
                  </div>
                  <p className="text-sm text-slate-400">
                    {project.description}
                  </p>

                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-xs text-cyan-300/90"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-3 space-y-1">
                    {project.features.slice(0, 3).map((feat) => (
                      <li key={feat} className="text-xs text-slate-500">
                        ✓ {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-10 text-center text-sm text-slate-400 italic">
          Samples listed… list never ends.
        </div>
      </div>
    </AnimatedSection>
  );
}
