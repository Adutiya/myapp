document.addEventListener('DOMContentLoaded', () => {
    // Get the query string (the part after ? in the URL)
    const urlParams = new URLSearchParams(window.location.search);
    const playlistId = urlParams.get('playlist'); // Get the playlist ID
  
    // Fetch the playlist data based on the playlist ID
    // For demonstration, let's use a mock object (you would usually fetch this data from a server or API)
    const playlists = [
      { id: 1, title: "Pop Hits", description: "Top Pop Songs", songs: ["Song 1", "Song 2", "Song 3"] },
      { id: 2, title: "Rock Classics", description: "Classic Rock Anthems", songs: ["Rock Song 1", "Rock Song 2"] },
      // Add more playlists here
    ];
  
    // Find the playlist by ID
    const playlist = playlists.find(p => p.id == playlistId);
  
    if (playlist) {
      // Update the page content with the playlist details
      document.getElementById('playlisttitle').textContent = playlist.title;
      document.getElementById('playlistdescription').textContent = playlist.description;
  
      const songList = document.getElementById('playlistsongs');
      playlist.songs.forEach(song => {
        const songItem = document.createElement('div');
        songItem.textContent = song;
        songList.appendChild(songItem);
      });
    } else {
      // If playlist not found, show an error
      document.getElementById('playlisttitle').textContent = "Playlist not found!";
      document.getElementById('playlistdescription').textContent = "Sorry, we couldn't find the playlist you're looking for.";
    }
  });
  