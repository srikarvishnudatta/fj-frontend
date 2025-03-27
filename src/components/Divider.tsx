type DividerProps = {
  className?:string
}
export default function Divider({className}: DividerProps) {
  return (
    <div className={"border-t-1 border-gray-300 mb-5 " + className}></div>
  )
}
