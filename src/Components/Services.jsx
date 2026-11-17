import { Headset, RefreshCw, ShieldHalf, Truck } from "lucide-react"

const services = [
  { icon: Truck, title: "Free Delivery", text: "On all orders over $50", stroke: 2.25 },
  { icon: ShieldHalf, title: "100% Secure", text: "256-bit encrypted checkout", stroke: 2.5 },
  { icon: RefreshCw, title: "30-Day Returns", text: "Hassle-free money back", stroke: 2.25 },
  { icon: Headset, title: "24/7 Support", text: "Dedicated expert help team", stroke: 2.25 },
]

const Services = () => {
  return (
    <div className="flex items-center justify-center px-4 py-6 sm:p-8">
      <div className="grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, text, stroke }) => (
          <div
            key={title}
            className="flex items-center rounded-lg border border-gray-400 p-2 hover:border-blue-800"
          >
            <div className="shrink-0 rounded-2xl bg-sky-100 p-3">
              <Icon size={30} strokeWidth={stroke} />
            </div>
            <div className="px-3">
              <div className="text-lg font-bold">{title}</div>
              <div className="text-xs">{text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services