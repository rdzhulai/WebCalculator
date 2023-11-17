using System.Numerics;

namespace WebCalculator.Models
{
    public class History
    {
        public List<HistoryItem>  { get; }
        public History() {
            history = new List<string>();
        }
        public void AddItem(string item) {
            history.Append(item);
        }
    }
}
