# Lawrence guide to installing docker on your wsl in your booz allen laptop
1. make sure wsl 2 is installed. it must be version 2. MUST.
2. activate wsl by typing `wsl`. or by opening wsl.
3. run `ping google.com`  If it doesn't work, you need to fix your dns resolver. Follow the directions that I copied from chatgpt:

Since you are experiencing DNS resolution issues in WSL but not in the regular Windows command prompt, the problem seems specific to the WSL network configuration. Here are some additional steps you can take to troubleshoot and resolve this issue:

### Check WSL Version

Ensure you're using the latest version of WSL. You can check and update WSL by following these steps:

1. **Check WSL version**:
   ```sh
   wsl --list --verbose
   ```

2. **Update WSL**:
   - Open PowerShell as an administrator and run:
     ```sh
     wsl --update
     ```

### Reset Network Configuration in WSL

Resetting the network configuration within WSL might resolve the issue:

1. **Shut down all WSL instances**:
   ```sh
   wsl --shutdown
   ```

2. **Delete `/etc/resolv.conf` if it exists**:
   ```sh
   sudo rm /etc/resolv.conf
   ```

3. **Restart WSL**:
   ```sh
   wsl
   ```

### Manually Configure DNS in WSL

After restarting, manually configure DNS settings:

1. **Create a new `/etc/resolv.conf`**:
   ```sh
   sudo bash -c 'echo "nameserver 8.8.8.8" > /etc/resolv.conf'
   sudo bash -c 'echo "nameserver 8.8.4.4" >> /etc/resolv.conf'
   ```

2. **Prevent automatic overwrite**:
   ```sh
   sudo chattr +i /etc/resolv.conf
   ```

4. You may have noticed that the last command didn't work. In order to fix this, follow the next set of directions that I copied from chatgpt.

The `chattr +i` command is not supported in WSL because it relies on file attributes that are specific to certain Linux file systems and aren't fully implemented in WSL's file system. Given this, let's focus on alternative methods to resolve the DNS issue without using `chattr`.

### Alternative Steps to Fix DNS Issues in WSL

#### 1. Configure `/etc/resolv.conf` with a Static DNS

Instead of using `chattr`, we can ensure that the DNS configuration is retained by creating a custom DNS configuration script and running it at WSL startup.

##### Step 1: Backup Existing `/etc/resolv.conf`
First, make sure to back up your current `resolv.conf` file:

```sh
sudo cp /etc/resolv.conf /etc/resolv.conf.backup
```

##### Step 2: Create a Custom DNS Configuration Script
Create a script that sets the DNS configuration:

```sh
sudo nano /usr/local/bin/set_dns.sh
```

Add the following lines to the script:

```sh
#!/bin/bash
echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf > /dev/null
echo "nameserver 8.8.4.4" | sudo tee -a /etc/resolv.conf > /dev/null
```

Save and close the file (Ctrl+X, then Y, then Enter).

##### Step 3: Make the Script Executable
Make the script executable:

```sh
sudo chmod +x /usr/local/bin/set_dns.sh
```

##### Step 4: Run the Script at WSL Startup
To ensure this script runs every time you start WSL, add it to your `.bashrc` or `.profile` file:

```sh
echo "/usr/local/bin/set_dns.sh" >> ~/.bashrc
```

#### 2. Modify WSL Configuration File

WSL 2 allows configuring network settings via the `.wslconfig` file in your Windows user directory.

##### Step 1: Create or Edit `.wslconfig`
Open the `.wslconfig` file in your Windows user directory. If it doesn't exist, create it:

```sh
notepad.exe $env:USERPROFILE\.wslconfig
```

Note: if this command fails, type in into powershell instead.
##### Step 2: Add Network Configuration
Add the following lines to configure the DNS settings:

```ini
[wsl2]
dns = 8.8.8.8
```

Save the file and close Notepad.

##### Step 3: Restart WSL
After making changes to `.wslconfig`, restart WSL:

```sh
wsl --shutdown
wsl
```

Now, the wsl dns bullcrap should be resolved. To make sure, try pinging google again. If it fails, its time to give up. Otherwise, continue to the next set of steps to install docker. 


`sudo apt update && sudo apt upgrade`
`sudo apt remove docker docker-engine docker.io containerd runc` <- this command is for manning in case he tried installing already
`sudo apt install --no-install-recommends apt-transport-https ca-certificates curl gnupg2`

```
update-alternatives --config iptables
```
And select iptables-legacy.

```
. /etc/os-release
```

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo tee /etc/apt/trusted.gpg.d/docker.asc
```

```
echo "deb [arch=amd64] https://download.docker.com/linux/ubuntu jammy stable" | sudo tee /etc/apt/sources.list.d/docker.list
```

```
sudo apt update
```

`sudo apt install docker-ce docker-ce-cli containerd.io`

By now you should have docker successfully installed. Confirm by typing `docker --version`

If it doesnt work, then were done for.