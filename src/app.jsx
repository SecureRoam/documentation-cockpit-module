import cockpit from 'cockpit';
import React from 'react';
import { Alert } from "@patternfly/react-core/dist/esm/components/Alert/index.js";
import { Card, CardBody, CardTitle } from "@patternfly/react-core/dist/esm/components/Card/index.js";
import { Wizard, WizardStep, Button } from '@patternfly/react-core';

const _ = cockpit.gettext;

export class Application extends React.Component {
    constructor() {
        super();
        this.state = { hostname: _("Unknown") };

        cockpit.file('/etc/hostname').watch(content => {
            this.setState({ hostname: content.trim() });
        });
    }

    render() {
        return (
            <div>
                <Card>
                    <CardTitle component="h1">Quick start guide</CardTitle>
                    <CardBody>
                        Discover the Secure Roam Companion and learn how to use it.
                    </CardBody>
                </Card>
                <Card>
                    <Wizard height={600} title="Basic wizard">
                        <WizardStep name="Connect the Wi-Fi" id="wifi-step">
                            <p>
                                Secure Roam Companion protects your device from malicious networks.
                            </p>
                            You can connect to the Wi-Fi network using the Wi-Fi settings.
                            <br />
                            <Button variant="secondary" ouiaId="Secondary">
                                Go to Wi-Fi settings
                            </Button>{' '}
                        </WizardStep>
                        <WizardStep name="Check the firewall settings" id="firewall-step">
                            <p>
                                Secure Roam Companion use restrictive firewall settings to protect your device.
                            </p>
                            <br />
                            <div>
                                Some applications may not work properly. You can adjust the firewall settings in the firewall settings.
                            </div>
                            <br />
                            <div>
                                By default, the firewall drop all incoming connections except for the 80 (HTTP) and 443 (HTTPS) ports.
                            </div>
                            <br />
                            <Button variant="secondary" ouiaId="Secondary">
                                Go to firewall settings
                            </Button>{' '}
                        </WizardStep>
                        <WizardStep name="Connect your VPN" id="vpn-step">
                            <p>
                                Secure Roam Companion allows you to route all your traffic whenever you want.
                            </p>
                            <br />
                            <div>
                                SRC supports OpenVPN protocol. If you have a VPN configuration file, you can import it in the VPN settings.
                            </div>
                            <br />
                            <Alert variant="info" title="Doesn't have a VPN?" ouiaId="InfoAlert">
                                You can route all your traffic trought the Tor network. Learn more about the Tor network.
                            </Alert>
                            <br />
                            <Button variant="secondary" ouiaId="Secondary">
                                Go to VPN settings
                            </Button>{' '}
                        </WizardStep>
                        <WizardStep name="Check the DNS filter" id="dns-step">
                            <p>
                                Secure Roam Companion blocks malicious domains, trackers and ads.
                            </p>
                            <br />
                            <div>
                                SRC use Pi-hole as DNS filter. By default, Pi-hole get its answer from the Google's DNS servers. You can change the DNS servers in the DNS settings.
                            </div>
                            <br />
                            <div>
                                Pi-hole is configured to block all domains from the StevenBlack's hosts file.
                            </div>
                            <br />
                            <Button variant="secondary" ouiaId="Secondary">
                                Go to DNS settings
                            </Button>{' '}
                        </WizardStep>
                        <WizardStep name="Review" id="basic-review-step" footer={{ nextButtonText: 'Finish' }}>
                            <p>
                                You want to learn more about Secure Roam Companion?
                            </p>
                            <br />
                            <div>
                                You can visit the Secure Roam Companion comprehensive documentation.
                            </div>
                            <br />
                            <Button variant="secondary" ouiaId="Secondary">
                                Go to documentation
                            </Button>{' '}
                        </WizardStep>
                    </Wizard>
                </Card>
            </div>
        );
    }
}
