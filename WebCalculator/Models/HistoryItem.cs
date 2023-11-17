namespace WebCalculator.Models
{
    public class HistoryItem
    {
        public int Id { get; }
        public string Data { get; }
        public DateTime Time { get; }

        public HistoryItem(int id, string data, DateTime time)
        {
            Id = id;
            Data = data;
            Time = time;
        }
    }
}
