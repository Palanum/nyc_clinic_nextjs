export default function ReviewCard({ text, name, servicename, avatar, verified }) {
    return (
        <div
            className="
        relative rounded-2xl p-8
        bg-white/5 backdrop-blur-md
        border border-white/10
        shadow-[0_8px_32px_rgba(0,0,0,0.25)]
      "
        >

            {/* ❝ Background decoration (fixed) */}
            <div className="
  absolute top-3 left-4
  font-thai-body
  text-primary-light/70
  text-[clamp(32px,3vw,42px)]
  leading-none
">
                ❝
            </div>

            <p
                className="
    relative z-10
    text-white/90
    text-[clamp(14px,1.2vw,16px)]
    leading-[1.8]
    mb-6
    font-light
    tracking-wide
    pl-2
  "
            >
                {text}
            </p>
            <div
                className="
    absolute bottom-4 right-5
   font-thai-body
  text-primary-light/70
    text-[clamp(32px,3vw,42px)]
    leading-none
    pointer-events-none
  "
            >
                ❞
            </div>
            {/* USER */}
            <div className="flex items-center gap-3">
                {avatar ? (
                    <img
                        src={avatar}
                        alt={name}
                        className="w-10 h-10 rounded-full object-cover border border-white/10"
                    />
                ) : (
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm">
                        {name?.charAt(0)}
                    </div>
                )}

                <div className="flex flex-col font-thai-body">
                    <div className="flex items-center gap-2">
                        <span className="text-[clamp(13px,1vw,14px)] text-white font-medium tracking-wide">
                            {name}
                        </span>

                        {verified && (
                            <span className="text-[clamp(10px,1vw,12px)] px-2 py-[2px] rounded-full bg-white/10 text-white/60 tracking-wide">
                                VERIFIED
                            </span>
                        )}
                    </div>

                    <span className="text-[clamp(13px,1vw,14px)] text-white/40 tracking-wide">
                        {servicename}
                    </span>
                </div>
            </div>
        </div>
    );
}